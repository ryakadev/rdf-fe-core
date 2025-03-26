/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const distPath = path.resolve("dist");
const exports = {};

const addExports = (folder, parent = "") => {
	const folderPath = path.join(distPath, folder);
	if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) return;

	const files = fs.readdirSync(folderPath);
	let hasMjs = false;

	files.forEach((file) => {
		const filePath = path.join(folderPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			addExports(`${folder}/${file}`, parent ? `${parent}/${file}` : file);
		} else if (file.endsWith(".mjs")) {
			hasMjs = true;
		}
	});

	if (hasMjs) {
		const exportKey = `./${folder}/*`;
		exports[exportKey] = {
			types: `./dist/${folder}/*.d.mts`,
			import: `./dist/${folder}/*.mjs`,
			require: `./dist/${folder}/*.js`,
		};
	}
};

const folders = fs.readdirSync(distPath);
folders.forEach((folder) => addExports(folder));

const packageJsonPath = path.resolve("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

packageJson.exports = exports;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("✅ Exports berhasil di-generate!");

try {
	execSync("npx prettier --write package.json", { stdio: "inherit" });
	console.log("✅ package.json berhasil di-generate dan di-format!");
} catch (error) {
	console.error("Error details:", error);
	console.warn("⚠️ Gagal menjalankan ESLint, pastikan ESLint sudah terinstall.");
}
