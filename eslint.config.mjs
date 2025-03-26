import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.plugins("prettier"),
	...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
	...compat.config({
		ignorePatterns: ["tailwind.config.ts", "next.config.ts", "dist"],
		rules: {
			"no-console": "warn",
			"prettier/prettier": [
				"warn",
				{
					endOfLine: "auto",
					bracketSpacing: true,
					jsxBracketSameLine: false,
					tabWidth: 4,
					trailingComma: "all",
					useTabs: true,
					singleAttributePerLine: true,
					printWidth: 120,
				},
			],
		},
	}),
	eslintConfigPrettier,
];

export default eslintConfig;
