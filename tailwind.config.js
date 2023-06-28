/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			quicksand: ["Quicksand", "sans-serif"],
			macondo: ["Macondo", "cursive"],
			firamono: ["Fira Mono", "monospace"],
			staatliches: ["Staatliches", "cursive"],
		},
		extend: {
			backgroundImage: (theme) => ({
				hero: "url(/src/assets/hero/j-lee-YTV-GHH9VpQ-unsplash.jpg)",
				// heroImage: "url(/src/assets/hero/sirisvisual-b2Cm0AD0QqE-unsplash-cropped.jpg)",
			}),
			animation: {
				fadeIn: "fadeIn 1s ease-in-out forwards",
				fadeUp: "fadeUp 1s ease-in-out forwards",
				fadeDown: "fadeDown 1s ease-in-out forwards",
				fadeOut: "fadeOut 1s ease-in-out forwards",
				// progress: "progress 2s ease-in-out forwards",
				wiggle: "wiggle 1s ease-in-out forwards",
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
				// progress: {
				// 	"0%": { width: "0%", opacity: 0 },
				// 	"100%": { opacity: 1 }
				// },
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
