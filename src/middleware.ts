import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

// export async function middleware(req: NextRequest) {
//   console.log('req: ', req);
//   return NextResponse.next();
// }

export const config = {
  matcher: ['/dashboard/:path*', '/', '/users']
}