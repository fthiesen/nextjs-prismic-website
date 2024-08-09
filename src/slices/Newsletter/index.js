import Section from '@/components/Section'
import { Button, Container, Stack, TextField } from '@mui/material'

/**
 * @typedef {import("@prismicio/client").Content.NewsletterSlice} NewsletterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsletterSlice>} NewsletterProps
 * @param {NewsletterProps}
 */
const Newsletter = ({ slice }) => {
	// const service = slice.variation
	// const key = slice.primary.api_key
	return (
		<Section
			title={slice.primary.title}
			intro={slice.primary.intro}
			backgroundColor='quaternary.main'
		>
			<Container maxWidth='md'>
				<Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
					<TextField name='firstName' label='First Name' variant='filled' />
					<TextField name='lastName' label='Last Name' variant='filled' />
					<TextField name='email' label='Email' variant='filled' />
					<Button variant='contained' color='primary' size='large'>
						Subscribe
					</Button>
				</Stack>
			</Container>
		</Section>
	)
}

export default Newsletter

