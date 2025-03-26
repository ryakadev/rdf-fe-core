/* eslint-disable no-console */
import { comparePassword } from "@/lib/bcrypt";
import { createToken } from "@/lib/jwt";
import { USERS } from "@/lib/mock-user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email, password } = await req.json();

		// // Simulasi validasi user dari database
		const user = USERS.find((user) => user.email === email) || null;

		if (!user || !comparePassword(password, user.password)) {
			return NextResponse.json(
				{
					statusCode: 401,
					message: "Invalid credentials",
				},
				{ status: 401 },
			);
		}

		// Jika valid, buat token JWT / bisa gunain token dari api external
		const token = await createToken(email);

		// Set cookie session dengan token JWT yang telah dibuat sebelumnya
		(await cookies()).set("session", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			path: "/",
			maxAge: 60 * 60 * 24 * 7, // 1 minggu
		});

		return NextResponse.json(
			{
				statusCode: 200,
				message: "Login success",
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error during login:", error);
		return NextResponse.json(
			{
				statusCode: 500,
				message: "Internal Server Error",
			},
			{ status: 500 },
		);
	}
}
