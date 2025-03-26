"use server";

import { SignJWT } from "jose";

export async function createToken(email: string) {
	const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

	const token = await new SignJWT({ sub: email })
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("7d")
		.sign(secret);

	return token;
}
