/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html}"],
	purge: ["./src/**/*.{astro,html}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
		require("@tailwindcss/typography")
	],
	daisyui: {
		themes: ["halloween"]
	}
}
