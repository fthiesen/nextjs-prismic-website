import { Container, Stack, Typography } from '@mui/material'
import { PrismicText } from '@prismicio/react'
import React from 'react'

const Section = ({ children, title, intro, backgroundColor, textColor }) => {
	return (
		<Container
			component='section'
			maxWidth={false}
			sx={{ width: '100%', backgroundColor: backgroundColor || 'white' }}
		>
			<Container component='div' maxWidth='lg' sx={{ pt: 10, pb: 8 }}>
				{title && (
					<Typography variant='h3' className={`text-center pb-12 text-${textColor}`}>
						{title}
					</Typography>
				)}
				{intro[0].text && (
					<Typography sx={{ fontSize: '1.6rem' }} className={`text-center pb-16 text-${textColor}`}>
						<PrismicText field={intro} />
					</Typography>
				)}
				<Stack sx={{ position: 'relative' }}>{children}</Stack>
			</Container>
		</Container>
	)
}

export default Section
