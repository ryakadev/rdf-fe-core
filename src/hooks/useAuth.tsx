"use client";

import { User } from "@/types/auth.type";
import { useState, useEffect } from "react";

export function useAuth() {
	const [userData, setUserData] = useState<User | null>(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch("/api/auth/get-session", { credentials: "include" });
				if (res.ok) {
					const data = await res.json();
					setUserData(data);
				} else {
					throw new Error("Failed to fetch user data");
				}
			} catch (err: unknown) {
				setError(err instanceof Error ? err.message : "An unknown error occurred");
			} finally {
				setLoading(false);
			}
		};
		fetchUser();
	}, []);

	return { userData, isLoading, error };
}
