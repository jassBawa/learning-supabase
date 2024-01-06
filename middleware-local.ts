"use client";

import supabase from "@/services/supabase";
import { Session } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Retrieve token from local storage

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("console here --> ", user);

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Continue with request
  return NextResponse.next();
}
export const config = {
  matcher: [
    // Match all routes except for the login route
    "/dashboard",
  ],
};
