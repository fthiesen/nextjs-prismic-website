import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Section = ({ children, title, backgroundColor, textColor }) => {
	return (
		<Container
			component='section'
			maxWidth={false}
			sx={{ width: '100%', backgroundColor: backgroundColor || 'white' }}
		>
			<Container component='div' maxWidth='lg' sx={{ pt: 10, pb: 8 }}>
				<Typography variant='h3' className={`text-center pb-16 text-${textColor}`}>
					{title}
				</Typography>
				<Stack sx={{ position: 'relative' }}>{children}</Stack>
			</Container>
		</Container>
	)
}

export default Section
