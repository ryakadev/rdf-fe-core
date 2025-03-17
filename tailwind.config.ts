import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/views/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
