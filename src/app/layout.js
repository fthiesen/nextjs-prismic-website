import './globals.css'

import { PrismicPreview } from '@prismicio/next'
import { createClient, repositoryName } from '@/prismicio'
import theme from '@/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { Header } from '@/components/Header'

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
	const client = createClient()
	const settings = await client.getSingle('settings')
	const navigation = await client.getSingle('navigation')

	return (
		<html lang='en'>
			<body>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{/* @ts-expect-error Async Server Component */}
					<Header navigation={navigation} settings={settings} />
					{children}
					<PrismicPreview repositoryName={repositoryName} />
				</ThemeProvider>
			</body>
		</html>
	)
}

