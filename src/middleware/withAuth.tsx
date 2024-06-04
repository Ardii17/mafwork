import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requirePath: string[] = []
) {
  const authPage = ["auth", ""];
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname.split("/")[1];

    if (requirePath.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        if (!authPage.includes(pathname)) {
          const url = new URL("/auth/signin", req.url);
          url.searchParams.set("callbackUrl", encodeURI(req.url));
          return NextResponse.redirect(url);
        }
      }

      if (token) {
        if (authPage.includes(pathname)) {
          const url = new URL("/home", req.url);
          return NextResponse.redirect(url);
        }
      }
    }
    return middleware(req, next);
  };
}
