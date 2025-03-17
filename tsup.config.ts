import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/components/**/*.tsx"], // Setiap file di dalam folder ini akan di-build terpisah
	format: ["cjs", "esm"], // Output dalam CommonJS dan ES Modules
	dts: true, // Generate .d.ts files
	sourcemap: true, // Generate source maps
	clean: true, // Bersihkan output sebelum build
	outDir: "dist", // Direktori output
	splitting: false, // Hindari bundling menjadi satu file besar
	treeshake: true, // Hapus kode yang tidak terpakai
	minify: true, // Minify output
	minifyWhitespace: true, // Minify whitespace
	minifyIdentifiers: true, // Minify identifiers
	minifySyntax: true, // Minify syntax
	external: ["react", "react-dom"], // Jadikan React dan ReactDOM sebagai external
	tsconfig: "tsconfig.build.json", // Gunakan tsconfig.build.json
});
