import { createClient } from '@/prismicio'
import CarouselComponent from './CarouselComponent'

/**
 * @typedef {import("@prismicio/client").Content.CarouselSlice} CarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarouselSlice>} CarouselProps
 * @param {CarouselProps}
 */
const Carousel = async ({ slice }) => {
	const client = createClient()
	const contentType = slice.primary.content.type
	const items = await client.getAllByType(contentType)

	return <CarouselComponent slice={slice} items={items} />
}

export default Carousel

