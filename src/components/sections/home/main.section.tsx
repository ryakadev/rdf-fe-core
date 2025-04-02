"use client";

import { motion } from "motion/react";

const listItems = [
	"Shadcn UI (Component Library)",
	"Tailwind CSS V4 (Utility-First CSS Framework)",
	"Jest (JavaScript Testing Framework)",
	"React Testing Library (Component Testing Library)",
	"Husky (Git Hooks)",
	"Commitlint (Conventional Commit Linter)",
	"Storybook (Component Development Environment)",
	"Motion - known as Framer Motion (Animation Library)",
	"Prettier (Code Formatter)",
	"ESLint (Code Linter)",
	"Lodash (Utility Library)",
	"Lucid React (Icon library)",
	"Zod (Schema Validation Library)",
	"React Hook Form (Form Library)",
];

const HomeMainSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="grid grid-cols-12 items-center py-20"
		>
			<div className="col-span-full md:col-span-6">
				<p className="animate-pulse text-left text-xs">v1.0-2025 • Rie Labs Boilerpate</p>
				<h1 className="my-4 text-left text-5xl font-extrabold">
					Bolierplate
					<br />
					Next.js
				</h1>
				<div className="flex flex-col flex-wrap items-start gap-2 md:flex-row md:items-center">
					<div className="w-fit rounded-lg bg-blue-500 px-4 py-2 text-white">
						<p className="text-left text-sm font-bold">TypeScript</p>
					</div>
					<div className="flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 128 128"
							width="1em"
							height="1em"
						>
							<g fill="#61DAFB">
								<circle
									cx="64"
									cy="64"
									r="11.4"
								/>
								<path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z" />
							</g>
						</svg>
						<p className="text-left text-sm">
							<strong>
								React <sub>19</sub>
							</strong>
						</p>
					</div>
					<div className="flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 15 15"
							width="1em"
							height="1em"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M0 7.5a7.5 7.5 0 1 1 11.698 6.216L4.906 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5M10 10V4h1v6z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="space-x-2 text-left text-sm">
							<strong>
								Next.js <sub>15</sub>
							</strong>
							<span>+</span>
							<span>App Routes</span>
						</p>
					</div>
				</div>
			</div>
			<div className="col-span-full space-y-4 md:col-span-6">
				<p className="mt-10! text-left text-sm font-bold">Pre installed & Pre-configured with:</p>
				<ul className="list-inside space-y-2 text-left text-sm">
					{listItems.map((item, index) => (
						<motion.li
							key={item}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: index * 0.2 }}
							className="flex items-center"
						>
							<div className="mr-2 flex size-6 items-center justify-center rounded-md bg-green-400/40">
								✅
							</div>
							{item}
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default HomeMainSection;
