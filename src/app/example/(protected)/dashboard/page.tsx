/* eslint-disable no-console */
"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
	const router = useRouter();
	const { userData, isLoading } = useAuth();

	const handleLogout = async () => {
		try {
			const res = await fetch("/api/auth/logout", {
				method: "POST",
				credentials: "include",
			});

			if (res.ok) {
				router.push("/example/authentication");
			} else {
				console.error("Failed to log out");
			}
		} catch (error) {
			console.error("An error occurred during logout:", error);
		}
	};

	if (isLoading) {
		return (
			<div className="flex min-h-screen flex-col justify-center p-10">
				<h2 className="text-2xl font-bold">Loading...</h2>
			</div>
		);
	}

	if (!userData) {
		return (
			<div className="flex min-h-screen flex-col justify-center gap-4 p-10">
				<h2 className="text-2xl font-bold">You are not logged in.</h2>
				<Button
					onClick={() => router.push("/example/authentication")}
					className="w-fit"
				>
					Login
				</Button>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen flex-col justify-center gap-4 p-10">
			<h2 className="text-2xl font-bold">Welcome, {userData.email}!</h2>
			<Button
				onClick={handleLogout}
				className="w-fit"
			>
				<LogOut />
				Logout
			</Button>
		</div>
	);
}
