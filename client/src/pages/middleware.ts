import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_OAUTH_SECRET;

async function middleware(req: NextRequest, event: NextFetchEvent): Promise<any> {
  const token = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;
  console.log(token, event);
  if (pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard', req.url));
  }
}
export const config = {
  matcher: ['/dashboard/:path*'],
};
