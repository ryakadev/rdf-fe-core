import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AnimatePresence } from "motion/react";

const poppins = Poppins({
	preload: true,
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Ryakadev Community",
		default: "Ryakadev Community",
	},
	description: "Boilerplate for Next.js with TypeScript, ESLint, Prettier, Tailwind CSS, and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<main className="relative flex min-h-screen flex-col bg-white">
					<AnimatePresence mode="wait">{children}</AnimatePresence>
				</main>
			</body>
		</html>
	);
}
