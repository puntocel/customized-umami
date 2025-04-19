'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const email = formData.get('email')?.toString()
    const password = formData.get('password')?.toString()

    // Set auth gate
    // Dummy validation (replace with real logic)
    //   const isValidUser = email === 'admin@site.com' && password === '1234'

    //   if (!isValidUser) {
    //     throw new Error('Invalid email or password')
    //   }
    const cookieStore = await cookies()

    // Set auth cookie
    cookieStore.set('auth-token', 'sample-token', {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    })
}
export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('auth-token')
}