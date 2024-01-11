import { NextResponse, type NextRequest } from "next/server";

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req:NextRequest) {
    const res = NextResponse.next();

    try {
        const supabase = createMiddlewareClient({ req, res});
        await supabase.auth.getSession();
    } catch (error) {
        console.log("Middleware",error);
    }
}