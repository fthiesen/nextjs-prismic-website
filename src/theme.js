'use client'

import { Poppins } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { IconButton, styled } from '@mui/material'

const poppins = Poppins({
	weight: ['400', '500'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
})

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			navigation: 1010,
		},
	},
	palette: {
		mode: 'light',
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
			light: '#7eddc9', // teal sky light
			dark: '#7eddc9', // teal sky light
			contrastText: '#594b42', // brown
		},
		text: {
			primary: '#594b42', // brown
			secondary: 'white',
			tertiary: '#65a970', // grove green
		},
	},
	body: {
		htmlFontSize: 10,
	},
	typography: {
		fontFamily: poppins.style.fontFamily,
		body1: {
			fontSize: '1.4rem',
		},
		h1: {
			fontFamily: 'Chalet-LondonNineteenEighty, Arial, sans-serif',
			fontSize: '5.6rem',
			fontWeight: 600,
		},
		h2: {
			fontFamily: 'Chalet-LondonNineteenEighty, Arial, sans-serif',
			fontSize: '4.6rem',
			lineHeight: '1.1em',
			fontWeight: 600,
		},
		h3: {
			// fontFamily: 'SouciSans, Arial, sans-serif',
			fontSize: '3.6rem',
			lineHeight: '1.1em',
			fontWeight: 500,
		},
		h4: {
			fontSize: '2rem',
			lineHeight: '1.1em',
			fontWeight: 500,
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor: theme.palette.secondary.main,
					boxShadow: 'none',
					borderRadius: 50,
					letterSpacing: 1,
					fontSize: '1.2rem',
					lineHeight: '1.2rem',
					whiteSpace: 'nowrap',
					minHeight: 34,
					padding: '5px 15px',
					'&:hover': {
						boxShadow: 'none',
					},
				}),
				sizeLarge: {
					fontSize: '1.4rem',
					padding: '15px 25px',
				},
			},
		},
		MuiIcon: {
			defaultProps: {
				baseClassName: 'material-icons',
			},
			styleOverrides: {
				root: {
					fontSize: '2.4rem',
				},
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

export const StyledIconButton = styled(IconButton)(({ top }) => ({
	position: 'absolute',
	top: top || '50%',
	backgroundColor: theme.palette.primary.main,
	border: `solid 1px ${theme.palette.secondary.main}`,
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
	},
	'&.Mui-disabled': {
		display: 'none',
	},
}))

export default theme
