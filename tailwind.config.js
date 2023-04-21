/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				// mountains: "url(/src/assets/cover/mountains-square.jpg)",
				flowers: "url(/src/assets/cover/yousef-alfuhigi-unsplash.jpg)",
				// flowers: "url(/src/assets/cover/evie-s-unsplash.jpg)",
			}),
		},
	},
	plugins: [],
};
