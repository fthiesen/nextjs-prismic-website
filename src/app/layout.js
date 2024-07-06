import './globals.css'

import { PrismicPreview } from '@prismicio/next'
import { createClient, repositoryName } from '@/prismicio'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import theme from '@/theme'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
	const client = createClient()
	const settings = await client.getSingle('settings')
	const navigation = await client.getSingle('navigation')

	return (
		<html lang='en'>
			<head>
				<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
				<link rel='icon' href={settings.data.favicon.url} type='image/svg+xml'></link>
			</head>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						{/* @ts-expect-error Async Server Component */}
						<Header navigation={navigation} settings={settings} />
						{children}
						<Footer settings={settings} />
						<PrismicPreview repositoryName={repositoryName} />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
