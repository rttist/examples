import { defineConfig } from "vite";
import { rttistPlugin } from "vite-plugin-rttist"; // <-- added
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [
		rttistPlugin({
			// <-- added
			packageInfo: { name: "vite-template-solid", rootDir: __dirname },
			projectRoot: __dirname,
		}),
		solidPlugin(),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
