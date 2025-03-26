import { USERS } from "@/lib/mock-user";
import { User, UserRole } from "@/types/auth.type";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
	const sessionCookie = (await cookies()).get("session")?.value;

	// Check if the session cookie exists
	if (!sessionCookie) {
		return NextResponse.json({ error: "Session not found" }, { status: 401 });
	}

	try {
		const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

		// Verify JWT token
		const { payload } = await jwtVerify(sessionCookie, secret);

		// Check if the payload is valid
		if (!payload || !payload.sub) {
			return NextResponse.json({ error: "Invalid session payload" }, { status: 401 });
		}

		// Simulasi validasi user dari database
		const user: User | undefined = USERS.find((user) => user.email === payload.sub);

		// Check if the user exists
		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 401 });
		}

		return NextResponse.json(
			{
				id: user.id,
				name: user.name,
				email: user.email,
				role: UserRole[user.role] || UserRole.GUEST,
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ error: error instanceof Error ? error.message : "An unknown error occurred" },
			{ status: 500 },
		);
	}
}
