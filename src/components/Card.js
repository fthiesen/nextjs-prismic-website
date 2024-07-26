'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicText } from '@prismicio/react'

const CardComponent = ({ title, imageField, content }) => {
	return (
		<Box
			sx={{
				p: 3,
				display: 'flex',
				gap: 2,
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				// border: `solid 1px ${theme.palette.secondary.main}`,
				borderRadius: 8,
				color: 'secondary.main',
				backgroundColor: 'white',
			}}
		>
			<PrismicNextImage
				field={imageField}
				alt={title || ''}
				className='object-cover rounded-full w-64 h-64'
			/>
			<Typography variant='h4' sx={{ pt: 0.4 }}>
				{title}
			</Typography>
			<Typography>
				<PrismicText field={content} />
			</Typography>
		</Box>
	)
}

export default CardComponent
