import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'

const CardComponent = ({ title, imageField, content }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				{/* <CardMedia
					component='img'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
					alt='green iguana'
				/> */}
				<PrismicNextImage
					field={imageField}
					alt={title || ''}
					// fill={true}
					className='object-cover'
				/>
			</CardActionArea>
			<CardContent>
				{title}
				{/* {content} */}
			</CardContent>
		</Card>
	)

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
					alt='green iguana'
				/>
				{/* <PrismicNextImage field={imageField} alt={title || ''} height={40} /> */}
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CardComponent
