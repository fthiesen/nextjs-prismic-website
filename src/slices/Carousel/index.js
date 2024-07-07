import CardComponent from '@/components/Card'
import Section from '@/components/Section'
import { createClient } from '@/prismicio'
import { StyledIconButton } from '@/theme'
import { Box, Button, Icon, Stack } from '@mui/material'
import { PrismicNextLink } from '@prismicio/next'

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

	// console.log('items', items)

	return (
		<Section title={slice.primary.title}>
			<Stack direction='row' spacing={2} sx={{ overflowX: 'hidden', position: 'relative' }}>
				{items
					.sort((a, b) => (a.data?.order || 999999) - (b.data?.order || 999999))
					.map(item => {
						return (
							<Box
								key={item.id}
								sx={{
									width: {
										md: 'calc(33.33% - 11px)',
										sm: 'calc(50% - 8px)',
										xs: '100%',
									},
									flexShrink: 0,
								}}
							>
								<CardComponent
									title={item.data.name}
									imageField={item.data.profile_picture}
									content={item.data.summary}
								/>
							</Box>
						)
					})}
			</Stack>
			<StyledIconButton sx={{ left: { xs: -5, sm: 5 } }}>
				<Icon>chevron_left</Icon>
			</StyledIconButton>
			<StyledIconButton sx={{ right: { xs: -5, sm: 5 } }}>
				<Icon>chevron_right</Icon>
			</StyledIconButton>
			<Stack direction='row' sx={{ justifyContent: 'center', p: 4 }}>
				<PrismicNextLink href={slice.primary.button_link.url}>
					<Button variant='contained' color='primary'>
						{slice.primary.button_text || 'Learn More'}
					</Button>
				</PrismicNextLink>
			</Stack>
		</Section>
	)
}

export default Carousel

