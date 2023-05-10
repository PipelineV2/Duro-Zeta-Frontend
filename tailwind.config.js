/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js, jsx, ts, tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: 'DM Sans, sans-serif',
				secondary: 'Sora, sans-serif',
			},
			textColor: {
				primary: '#002F72',
				secondary: '#FF6634',
				success: '#08A05C',
				error: '#F13637',
				warning: '#EEB614',
				lightGrey: '#A9A9A9',
			},
			backgroundColor: {
				primary: '#002F72',
				secondary: '#FF6634',
				success: '#08A05C',
				error: '#F13637',
				warning: '#EEB614',
			},
			borderColor: {
				primary: '#002F72',
				secondary: '#FF6634',
				error: '#F13637',
				lightGrey: '#A9A9A9',
				success: '#08A05C',
			},
			padding: {
				primary: '6vw',
			},
		},
	},
	plugins: [],
};
