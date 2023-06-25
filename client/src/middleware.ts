import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export type middleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined

const secret = process.env.NEXT_PUBLIC_OAUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({req, secret, raw: true});
  console.log(token);
  const { pathname } = req.nextUrl;
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/login', '/signup', '/test'],
};