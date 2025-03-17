/* eslint-disable no-console */
import fs from "fs";
import path from "path";

const distPath = path.resolve("dist");
const exports = {};

// Fungsi untuk membaca file dalam folder
const addExports = (folder) => {
	const folderPath = path.join(distPath, folder);
	if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) return;

	const files = fs.readdirSync(folderPath);
	files.forEach((file) => {
		if (file.endsWith(".mjs")) {
			const name = file.replace(".mjs", "");
			exports[`./${folder}/${name}`] = {
				types: `./dist/${folder}/${name}.d.mts`,
				import: `./dist/${folder}/${name}.mjs`,
				require: `./dist/${folder}/${name}.js`,
			};
		}
	});
};

// Loop semua folder dalam `dist`
const folders = fs.readdirSync(distPath);
folders.forEach((folder) => addExports(folder));

// Update package.json
const packageJsonPath = path.resolve("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

packageJson.exports = exports;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("✅ Exports berhasil di-generate!");
