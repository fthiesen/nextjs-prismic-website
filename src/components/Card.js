'use client'

import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicText } from '@prismicio/react'

const CardComponent = ({ title, imageField, content }) => {
	const theme = useTheme()
	return (
		<Box
			sx={{
				p: 3,
				display: 'flex',
				gap: 2,
				flexDirection: 'column',
				alignItems: 'center',
				height: 'auto',
				border: `solid 1px ${theme.palette.primary.main}`,
			}}
		>
			<PrismicNextImage
				field={imageField}
				alt={title || ''}
				className='object-cover rounded-full w-64 h-64'
			/>
			<Typography variant='h4' sx={{ pt: 0.4, color: 'tertiary.main' }}>
				{title}
			</Typography>
			<Typography>
				<PrismicText field={content} />
			</Typography>
		</Box>
	)
}

export default CardComponent
