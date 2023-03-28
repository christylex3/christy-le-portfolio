/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				mountains: "url(/src/assets/cover/mountains-square.jpg)",
			}),
		},
	},
	plugins: [],
};
