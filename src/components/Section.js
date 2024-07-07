import { Container, Typography } from '@mui/material'
import React from 'react'

const Section = ({ children, title, backgroundColor }) => {
	return (
		<Container
			component='section'
			maxWidth={false}
			sx={{ width: '100%', backgroundColor: backgroundColor || 'white' }}
		>
			<Container component='div' maxWidth='md' sx={{ pt: 10, pb: 8, position: 'relative' }}>
				<Typography variant='h3' className='text-center pb-16'>
					{title}
				</Typography>
				{children}
			</Container>
		</Container>
	)
}

export default Section
