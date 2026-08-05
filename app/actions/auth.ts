"use server"

import prisma from "@/lib/prisma"
import * as bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'travel3-super-secret-key-12345')

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Username dan Password wajib diisi.' }
  }

  try {
    const user = await prisma.adminUser.findUnique({
      where: { email }
    })

    if (!user) {
      return { error: 'Kredensial tidak valid.' }
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) {
      return { error: 'Kredensial tidak valid.' }
    }

    // Generate JWT token
    const token = await new SignJWT({ id: user.id, email: user.email, role: user.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1d') // 1 day
      .sign(JWT_SECRET)

    // Set cookie
    cookies().set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    })

    return { success: true }
  } catch (error) {
    console.error('Login error:', error)
    return { error: 'Terjadi kesalahan pada server.' }
  }
}

export async function logoutAction() {
  cookies().delete('admin_token')
}
