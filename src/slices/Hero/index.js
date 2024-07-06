import * as prismic from '@prismicio/client'
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next'

import { PrismicRichText } from '@/components/PrismicRichText'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

const components = {
	paragraph: ({ children }) => <Typography variant='h4'>{children}</Typography>,
}

const Hero = ({ slice }) => {
	const backgroundImage = slice.primary.backgroundImage

	return (
		<Container component='section' maxWidth={false} sx={{ pt: 20, pb: 12, position: 'relative' }}>
			{prismic.isFilled.image(backgroundImage) && (
				<>
					<PrismicNextImage
						field={backgroundImage}
						alt=''
						fill={true}
						style={{
							objectFit: 'cover',
							opacity: 0.4,
							pointerEvents: 'none',
							userSelect: 'none',
							zIndex: -1,
						}}
					/>
					<Box
						sx={{
							backgroundColor: 'black',
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							zIndex: -2,
						}}
					></Box>
				</>
			)}
			<Container
				maxWidth='md'
				sx={{
					color: 'text.secondary',
					lineHeight: '1.5em',
					display: 'flex',
					flexDirection: 'column',
					alignItems: { sm: 'flex-start', md: 'center' },
					gap: 2,
					mb: 5,
				}}
			>
				<Typography variant='h2'>{slice.primary.title}</Typography>

				<PrismicRichText field={slice.primary.summary} components={components} />

				<Stack direction='row' spacing={2} sx={{ mt: 1 }}>
					{prismic.isFilled.link(slice.primary.buttonLink) && (
						<Button variant='contained' color='primary' size='large'>
							<PrismicNextLink field={slice.primary.buttonLink}>
								{slice.primary.buttonText || 'Learn More'}
							</PrismicNextLink>
						</Button>
					)}
					{prismic.isFilled.link(slice.primary.button_link_2) && (
						<Button variant='contained' color='tertiary' size='large'>
							<PrismicNextLink field={slice.primary.button_link_2}>
								{slice.primary.button_text_2 || 'Learn More'}
							</PrismicNextLink>
						</Button>
					)}
				</Stack>
			</Container>
		</Container>
	)
}

export default Hero

