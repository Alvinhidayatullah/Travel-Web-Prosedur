import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// In a real app, use a strong secret from environment variables
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'travel3-super-secret-key-12345')

// WAF Settings
const sqlInjectionPattern = /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|TRUNCATE|ALTER|EXEC|WAITFOR)\b|['"]\s+OR\s+['"]|['"]\s*=\s*['"]|<script>|<\/script>)/i
const blockList = new Set<string>()

// Rate Limiting Map
const rateLimitMap = new Map<string, { count: number, resetTime: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const BLOCK_DURATION_MS = 15 * 60 * 1000 // 15 minutes
const MAX_LOGIN_ATTEMPTS = 5

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const search = request.nextUrl.search
  const ip = request.ip || '127.0.0.1'

  // WAF: Check if IP is blocked permanently (for this instance)
  if (blockList.has(ip)) {
    return new NextResponse('Forbidden: Malicious activity detected', { status: 403 })
  }

  // WAF: SQL/XSS Injection Detection in Query Params
  if (sqlInjectionPattern.test(decodeURIComponent(search))) {
    blockList.add(ip) // Instant ban
    return new NextResponse('Forbidden: Malicious payload detected', { status: 403 })
  }

  // Anti-Bruteforce on Login Server Action
  if (path === '/secure-admin/login' && request.method === 'POST') {
    const now = Date.now()
    const rateLimitInfo = rateLimitMap.get(ip)

    if (rateLimitInfo && rateLimitInfo.resetTime > now) {
      if (rateLimitInfo.count >= MAX_LOGIN_ATTEMPTS) {
        return new NextResponse(
          'Too Many Requests: IP has been temporarily blocked for 15 minutes due to suspicious activity.', 
          { status: 429, headers: { 'Retry-After': '900' } }
        )
      }
      rateLimitInfo.count += 1
    } else {
      // If past resetTime, or new IP, reset/init to 1 attempt and set resetTime to +10 mins (or 15 mins block if hit max later)
      rateLimitMap.set(ip, { count: 1, resetTime: now + (rateLimitInfo?.count && rateLimitInfo.count >= MAX_LOGIN_ATTEMPTS ? BLOCK_DURATION_MS : RATE_LIMIT_WINDOW_MS) })
    }

    // If max reached on this request, extend resetTime for block duration
    if (rateLimitMap.get(ip)!.count >= MAX_LOGIN_ATTEMPTS) {
      rateLimitMap.get(ip)!.resetTime = now + BLOCK_DURATION_MS;
    }
  }

  // OWASP A01: Broken Access Control
  if (path.startsWith('/secure-admin') && path !== '/secure-admin/login') {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/secure-admin/login', request.url))
    }

    try {
      await jwtVerify(token, JWT_SECRET)
    } catch (err) {
      return NextResponse.redirect(new URL('/secure-admin/login', request.url))
    }
  }

  const response = NextResponse.next()

  // Security Headers (CSP & Cache Control)
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  
  // Strict CSP
  response.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; font-src 'self';")

  // Strict Cache Control for Admin
  if (path.startsWith('/secure-admin')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
