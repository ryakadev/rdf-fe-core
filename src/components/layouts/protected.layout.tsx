"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface ProtectedLayoutProps {
	allowedRoles: string[];
	children: ReactNode;
	fallback?: ReactNode;
	unauthorizedFallback?: ReactNode;
	unauthenticatedFallback?: ReactNode;
}

export function ProtectedLayout({
	allowedRoles,
	children,
	fallback = <p>Loading...</p>,
	unauthorizedFallback = <p>Access Denied</p>,
	unauthenticatedFallback = <p>Please login</p>,
}: ProtectedLayoutProps) {
	const { userData, isLoading } = useAuth();

	if (isLoading) return fallback;
	if (!userData) return unauthenticatedFallback;
	if (!allowedRoles.includes(userData.role)) return unauthorizedFallback;

	return <>{children}</>;
}
