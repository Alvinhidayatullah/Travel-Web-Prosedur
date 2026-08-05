import { redirect } from 'next/navigation'

export default function SecureAdminRedirect() {
  redirect('/secure-admin/dashboard')
}
