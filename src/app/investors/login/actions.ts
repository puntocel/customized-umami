'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const loginId = formData.get('id')?.toString()
    const password = formData.get('password')?.toString()


    const isValidUser = loginId === 'investor' && password === 'Nexus1'

    if (!isValidUser) {
        throw new Error('Invalid ID or password')
    }
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