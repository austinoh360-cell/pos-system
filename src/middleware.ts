import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { SESSION_COOKIE } from "@/lib/constants";
import { UserRole } from "@/types/auth";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

async function readSession(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const secret = getSecret();
  if (!token || !secret) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    if (!payload.sub || typeof payload.role !== "string") return null;
    return {
      id: payload.sub,
      role: payload.role,
    };
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await readSession(request);

  const isAdminArea = pathname === "/app" || pathname.startsWith("/app/");
  const isRestaurantArea = pathname === "/access" || pathname.startsWith("/access/");

  if (isAdminArea) {
    if (!session || session.role !== UserRole.ADMIN) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  if (isRestaurantArea) {
    if (
      !session ||
      (session.role !== UserRole.RESTAURANT && session.role !== UserRole.ADMIN)
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/restaurant/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  if (pathname === "/admin/login" && session?.role === UserRole.ADMIN) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  if (
    pathname === "/restaurant/login" &&
    (session?.role === UserRole.RESTAURANT || session?.role === UserRole.ADMIN)
  ) {
    return NextResponse.redirect(new URL("/access", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/access/:path*", "/admin/login", "/restaurant/login"],
};
