import type { Metadata } from "next";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";

export const metadata: Metadata = {
	title: "Protected Route",
	description: "Protected Route Layout",
};

export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
