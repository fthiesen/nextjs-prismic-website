'use client'

import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicText } from '@prismicio/react'

const CardComponent2 = ({ title, imageField, content }) => {
	const theme = useTheme()
	return (
		<Box
			sx={{
				p: 3,
				display: 'flex',
				gap: 2,
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				border: `solid 1px ${theme.palette.secondary.main}`,
				borderRadius: 4,
				color: 'secondary.main',
				backgroundColor: 'white',
				'&:hover': {
					backgroundColor: 'rgba(255, 255, 255, 0.85)',
				},
				transition: 'background-color 0.5s ease-in-out',
				position: 'relative',
				'&:hover img': {
					transform: 'scale(1.05)',
					opacity: 0.8,
					transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
				},
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: 200,
					borderTopLeftRadius: 15,
					borderTopRightRadius: 15,
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
			<div className='mt-80'>
				<Typography variant='h4' sx={{ pt: 0.4, mb: 2 }}>
					{title}
				</Typography>
				<Typography>
					<PrismicText field={content} />
				</Typography>
			</div>
		</Box>
	)
}

export default CardComponent2
