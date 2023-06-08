/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
	theme: {
		extend: {
			fontFamily: {
				primary: 'DM Sans, sans-serif',
				secondary: 'Sora, sans-serif',
			},
			textColor: {
				primary: '#202020',
				secondary: '#FF6634',
				success: '#08A05C',
				error: '#F13637',
				warning: '#EEB614',
				lightGrey: '#A9A9A9',
			},
			backgroundColor: {
				primary: '#202020',
				secondary: '#FF6634',
				success: '#08A05C',
				error: '#F13637',
				warning: '#EEB614',
			},
			borderColor: {
				primary: '#202020',
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
