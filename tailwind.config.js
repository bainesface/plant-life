/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/atoms/**/*.{js,ts,jsx,tsx}',
		'./components/molecules/**/*.{js,ts,jsx,tsx}',
		'./components/organisms/**/*.{js,ts,jsx,tsx}',
	],
	// Ensure these match with .storybook/preview.js
	theme: {
		screens: {
			xs: '375px',
			sm: '600px',
			md: '900px',
			lg: '1200px',
			xl: '1536px',
		},
	},
	plugins: [],
};
