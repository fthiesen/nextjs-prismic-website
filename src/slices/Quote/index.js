import * as prismic from '@prismicio/client'
import { PrismicText } from '@prismicio/react'
import { Container, Typography } from '@mui/material'

const Quote = ({ slice }) => {
	return (
		<Container
			component='section'
			maxWidth={false}
			sx={{ width: '100%', backgroundColor: `${slice.variation}.main` }}
		>
			{prismic.isFilled.richText(slice.primary.quote) && (
				<Container
					component='blockquote'
					maxWidth='md'
					sx={{ pt: 12, pb: 10, color: `${slice.variation}.contrastText` }}
				>
					<Typography variant='h3'>
						<span>&ldquo;</span>
						<PrismicText field={slice.primary.quote} />
						<span>&rdquo;</span>
					</Typography>
					{prismic.isFilled.keyText(slice.primary.source) && (
						<Typography variant='h4' sx={{ textAlign: 'right', mt: 5 }}>
							&mdash; {slice.primary.source}
						</Typography>
					)}
				</Container>
			)}
		</Container>
	)
}

export default Quote

