/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"]["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				darkcyan: "#3c8067",
				cream: "#f2ebe3",
				verydarkblue: "#1c232b",
				darkgrayishblue: "#6c7289",
				white: "hsl(0, 0%, 100%)",
			},
			fontFamily: {
				monserrat: "Montserrat",
				fraunces: "Fraunces",
			},
		},
	},
	plugins: [],
};
