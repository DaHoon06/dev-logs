import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_OAUTH_SECRET;
//
// const withAuth = (req : NextRequest, accessToken: string) => {
//   const url = req.nextUrl.clone();
//   const { pathname } = req.nextUrl;
//
//   if(!isLogin) {
//     url.pathname = '/signin';
//     url.search = `callbackUrl=${pathname}`;
//
//     return NextResponse.redirect(url);
//   }
// }

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  if (!token) return NextResponse.redirect(new URL('/', req.url));
}
export const config = {
  matcher: ['/dashboard'],
};
