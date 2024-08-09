'use client'

import * as prismic from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@/components/PrismicRichText'
import { Box, Button, Container, Grid, Stack, useMediaQuery, useTheme } from '@mui/material'
import Section from '@/components/Section'

const TextWithImage = ({ slice }) => {
	const image = slice.primary.image
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.down('md'))
	const placement = slice.primary.image_placement === 'Right' ? (isXs ? 'Left' : 'Right') : 'Left'

	return (
		<Section
			title={slice.primary.title}
			intro={slice.primary.intro}
			backgroundColor={slice.primary.image_placement === 'Left' ? 'white' : 'grey.100'}
			textColor='primary-main'
		>
			<Container maxWidth='lg' sx={{ mt: 3 }}>
				<Grid container spacing={6}>
					{placement === 'Left' && prismic.isFilled.image(image) && (
						<Grid item xs={12} md={6}>
							<PrismicNextImage field={image} sizes='100vw' className='w-full' alt='' />
						</Grid>
					)}
					<Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
						<Box>
							<PrismicRichText field={slice.primary.text} />
							{slice.variation === 'withButton' && (
								<Stack direction='row' spacing={2} sx={{ mt: 3 }}>
									{prismic.isFilled.link(slice.primary.button_link) && (
										<Button variant='contained' color='primary' size='large'>
											<PrismicNextLink field={slice.primary.button_link}>
												{slice.primary.button_text || 'Learn More'}
											</PrismicNextLink>
										</Button>
									)}
									{prismic.isFilled.link(slice.primary.button_link_2) && (
										<Button variant='contained' color='quaternary' size='large'>
											<PrismicNextLink field={slice.primary.button_link_2}>
												{slice.primary.button_text_2 || 'Learn More'}
											</PrismicNextLink>
										</Button>
									)}
								</Stack>
							)}
						</Box>
					</Grid>
					{placement === 'Right' && prismic.isFilled.image(image) && (
						<Grid item xs={12} md={6}>
							<PrismicNextImage field={image} sizes='100vw' className='w-full' alt='' />
						</Grid>
					)}
				</Grid>
			</Container>
		</Section>
	)
}

export default TextWithImage
