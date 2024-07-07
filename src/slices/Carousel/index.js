import CardComponent from '@/components/Card'
import { createClient } from '@/prismicio'
import { Container, Typography } from '@mui/material'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CarouselSlice} CarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarouselSlice>} CarouselProps
 * @param {CarouselProps}
 */
const Carousel = async ({ slice }) => {
	console.log('slice', slice)

	const client = createClient()
	const contentType = slice.primary.content.type
	const items = await client.getAllByType(contentType)

	console.log('items', items)

	return (
		<Container
			component='section'
			maxWidth={false}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container maxWidth='md'>
				{items
					.sort((a, b) => (a.data?.order || 999999) - (b.data?.order || 999999))
					.map(item => {
						console.log('item', item.data.profile_picture)
						return (
							<CardComponent
								key={item.id}
								title={item.data.name}
								imageField={item.data.profile_picture}
								content={item.data.summary}
							/>
						)
					})}
			</Container>
		</Container>
	)
}

export default Carousel

