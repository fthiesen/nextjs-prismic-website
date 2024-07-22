import { createClient } from '@/prismicio'
import Carousel from './Carousel'

/**
 * @typedef {import("@prismicio/client").Content.CarouselSlice} CarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarouselSlice>} CarouselProps
 * @param {CarouselProps}
 */
const ItemsList = async ({ slice }) => {
	const client = createClient()
	const { variation } = slice
	const contentType = slice.primary.tag
	const { results } = await client.getByTag(contentType)

	switch (variation) {
		case 'default':
			return 'default'
		case 'carousel':
			return <Carousel slice={slice} items={results} />
		case 'grid':
			return 'grid'
		default:
			return <Carousel slice={slice} items={results} />
	}
}

export default ItemsList

