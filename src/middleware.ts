import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth-token')?.value

  // Only protect /investors (and subroutes), but allow access to /investors/login
  if (pathname.startsWith('/investors') && pathname !== '/investors/login') {
    if (!token) {
      const loginUrl = new URL('/investors/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Apply middleware only on these routes
export const config = {
  matcher: ['/investors/:path*'],
}
