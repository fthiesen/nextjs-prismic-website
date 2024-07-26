'use client'

import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicText } from '@prismicio/react'

const CardComponent2 = ({ title, imageField, content }) => {
	return (
		<Box
			sx={{
				p: 4,
				display: 'flex',
				gap: 2,
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				borderRadius: 8,
				color: 'secondary.main',
				backgroundColor: 'white',
				transition: 'background-color 0.3s ease-in-out',
				position: 'relative',
				'&:hover': {
					boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
					transform: 'scale(1.01)',
				},
				'&:hover img': {
					transform: 'scale(1.05)',
					opacity: 0.8,
					transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
				},
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: 240,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
					overflow: 'hidden',
					transition: 'all 0.3s ease-in-out',
					'& img': {
						transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
					},
					'&:hover img': {
						transform: 'scale(1.1)',
						opacity: 0.8,
					},
					'&:before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'rgba(0, 0, 0, 0)',
						transition: 'background 0.5s ease-in-out',
					},
					'&:hover:before': {
						background: 'rgba(0, 0, 0, 0.5)',
					},
				}}
			>
				<PrismicNextImage
					field={imageField}
					alt={title || ''}
					fill={true}
					style={{
						objectFit: 'cover',
					}}
				/>
			</Box>
			<Box sx={{ mt: 30 }}>
				<Typography variant='h4' sx={{ pt: 0.4, mb: 2 }}>
					{title}
				</Typography>
				<Typography>
					<PrismicText field={content} />
				</Typography>
			</Box>
		</Box>
	)
}

export default CardComponent2
