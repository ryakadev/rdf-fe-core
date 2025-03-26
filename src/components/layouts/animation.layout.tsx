"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const variants = {
	hidden: { opacity: 0, x: -10, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
};

export default function LayoutAnimation({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<motion.div
			className={cn(className)}
			variants={variants}
			initial="hidden"
			exit="hidden"
			animate="enter"
			transition={{ type: "easeInOut", duration: 0.5 }}
			key="layout"
		>
			{children}
		</motion.div>
	);
}
