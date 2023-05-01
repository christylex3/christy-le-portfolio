/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			quicksand: ["Quicksand", "sans-serif"],
			macondo: ["Merriweather", "cursive"],
			firamono: ["Fira Mono", "monospace"],
		},
		extend: {
			backgroundImage: (theme) => ({
				hero: "url(/src/assets/hero/eberhard-grossgasteiger-unsplash.jpg)",
			}),
		},
	},
	plugins: [],
};
