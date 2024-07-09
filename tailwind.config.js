module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/slices/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			sans: 'var(--font-poppins), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		},
		colors: {
			red: 'red',
			primary: {
				main: '#b4d33a', // lime green
				light: '#d6df22', // neon mustard
				dark: '#d6df22', // neon mustard
				contrastText: '#594b42', // brown
			},
			secondary: {
				main: '#594b42', // brown
				light: '#65a970', // grove green
				dark: '#65a970', // grove green
				contrastText: '#d6df22', // neon mustard
			},
			tertiary: {
				main: '#65a970', // grove green
				light: '#66c5b1', // teal sky
				dark: '#66c5b1', // teal sky
				contrastText: '#594b42', // brown
			},
			quaternary: {
				main: '#66c5b1', // teal sky
				light: '#b4d33a', // lime green
				dark: '#b4d33a', // lime green
				contrastText: '#594b42', // brown
			},
			text: {
				primary: '#594b42', // brown
				secondary: 'white',
				tertiary: '#65a970', // grove green
			},
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
}

