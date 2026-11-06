import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectMongo();
    return NextResponse.json({
      ok: true,
      status: mongoose.connection.readyState === 1 ? "ready" : "starting",
    });
  } catch {
    return NextResponse.json({ ok: false, status: "error" }, { status: 500 });
  }
}
