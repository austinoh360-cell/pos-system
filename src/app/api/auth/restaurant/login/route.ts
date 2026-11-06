import { NextResponse } from "next/server";
import { z } from "zod";
import { connectMongo } from "@/lib/mongodb";
import { createSessionToken, setSessionCookie } from "@/lib/auth";
import { verifyPassword } from "@/lib/password";
import { User } from "@/models/User";
import { UserRole } from "@/types/auth";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 400 });
    }

    await connectMongo();

    const user = await User.findOne({
      email: parsed.data.email.toLowerCase(),
      role: { $in: [UserRole.RESTAURANT, UserRole.ADMIN] },
      isActive: true,
    });

    if (!user || !(await verifyPassword(parsed.data.password, user.passwordHash))) {
      return NextResponse.json(
        { message: "Invalid restaurant credentials." },
        { status: 401 },
      );
    }

    const sessionUser = {
      id: String(user._id),
      email: user.email,
      name: user.name,
      role: user.role as typeof UserRole.RESTAURANT | typeof UserRole.ADMIN,
    };

    const token = await createSessionToken(sessionUser);
    await setSessionCookie(token);

    return NextResponse.json({ user: sessionUser, redirectTo: "/access" });
  } catch (error) {
    console.error("restaurant login failed", error);
    return NextResponse.json(
      { message: "Unable to sign in right now. Please try again." },
      { status: 500 },
    );
  }
}
