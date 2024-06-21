'use client'

import { Inter, Poppins } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const poppins = Poppins({
	weight: ['400', '500'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
})

// teal #66c5b1

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#b4d33a',
			light: '#d6df22',
			dark: '#d6df22',
			contrastText: '#594b42', // brown
		},
		secondary: {
			main: '#594b42', // brown
			light: '#d6df22',
			dark: '#65a970',
			contrastText: '#594b42', // brown
		},
		text: {
			primary: '#594b42', // brown
			secondary: '#fff',
			tertiary: '#65a970',
		},
	},
	typography: {
		fontFamily: poppins.style.fontFamily,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor: theme.palette.secondary.main,
					boxShadow: 'none',
					borderRadius: 50,
					letterSpacing: 1,
					fontSize: '0.8rem',
					'&:hover': {
						boxShadow: 'none',
					},
					padding: '5px 15px',
				}),
			},
		},
		MuiIcon: {
			defaultProps: {
				baseClassName: 'material-icons',
			},
		},
		// MuiAlert: {
		// 	styleOverrides: {
		// 		root: ({ ownerState }) => ({
		// 			...(ownerState.severity === 'info' && {
		// 				backgroundColor: '#60a5fa',
		// 			}),
		// 		}),
		// 	},
		// },
	},
})

export default theme
