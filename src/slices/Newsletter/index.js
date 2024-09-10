'use client'

import Section from '@/components/Section'
import {
	Button,
	Container,
	Stack,
	TextField,
	useTheme,
	useMediaQuery,
	Typography,
} from '@mui/material'
import jsonp from 'jsonp'
import { useState } from 'react'

/**
 * @typedef {import("@prismicio/client").Content.NewsletterSlice} NewsletterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsletterSlice>} NewsletterProps
 * @param {NewsletterProps}
 */
const Newsletter = ({ slice }) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))
	// const service = slice.variation
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
	})
	const [message, setMessage] = useState('')

	const handleChange = event => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}

	const handleRegisterClick = () => {
		if (!formData.firstName || !formData.lastName || !formData.email) {
			setMessage('Please fill in all fields')
			return
		}

		const formUrl = slice.primary.form_url.replace('/post?', '/post-json?')
		const url = `${formUrl}&EMAIL=${formData.email}&FNAME=${formData.firstName}&LNAME=${formData.lastName}`

		jsonp(url, { param: 'c' }, (_, data) => {
			const { msg, result } = data
			setMessage(msg)
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
			})
		})
	}

	return (
		<Section
			title={slice.primary.title}
			intro={slice.primary.intro}
			backgroundColor='quaternary.main'
		>
			<Container maxWidth='md'>
				{message && (
					<Stack sx={{ alignItems: 'center', mt: -3, mb: 3 }}>
						<Typography sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>{message}</Typography>
					</Stack>
				)}
				<Stack direction={isMobile ? 'column' : 'row'} spacing={2} sx={{ alignItems: 'center' }}>
					<TextField
						name='firstName'
						label='First Name'
						variant='filled'
						value={formData.firstName}
						onChange={handleChange}
						required={true}
					/>
					<TextField
						name='lastName'
						label='Last Name'
						variant='filled'
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
					<TextField
						name='email'
						label='Email'
						variant='filled'
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<Button variant='contained' color='primary' size='large' onClick={handleRegisterClick}>
						Subscribe
					</Button>
				</Stack>
			</Container>
		</Section>
	)
}

export default Newsletter

