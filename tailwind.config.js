/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			quicksand: ["Quicksand", "sans-serif"],
			macondo: ["Macondo", "cursive"],
			firamono: ["Fira Mono", "monospace"],
		},
		extend: {
			backgroundImage: (theme) => ({
				hero: "url(/src/assets/hero/eberhard-grossgasteiger-unsplash.jpg)",
			}),
			animation: {
				fadeIn: "fadeIn 1s ease-in-out forwards",
				fadeUp: "fadeUp 1s ease-in-out forwards",
				fadeDown: "fadeDown 1s ease-in-out forwards",
				fadeOut: "fadeOut 1s ease-in-out forwards",
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeUp: {
					"0%": { opacity: 0, transform: "translateY(30px)" },
					"100%": { opacity: 1, transform: "translateY(0px)" },
				},
				fadeDown: {
					"0%": { opacity: 0, transform: "translateY(-30px)" },
					"100%": { opacity: 1, transform: "translateY(0px)" },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
	},
	plugins: [],
	variants: {
		animation: ["motion-safe"],
	},
};
