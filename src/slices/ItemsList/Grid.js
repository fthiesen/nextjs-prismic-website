import { PrismicLink } from '@prismicio/react'
import { Button, Grid as MUI_Grid, Stack } from '@mui/material'
import CardComponent2 from '@/components/Card2'
import Section from '@/components/Section'

/**
 * @typedef {import("@prismicio/client").Content.GridSlice} GridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridSlice>} GridProps
 * @param {GridProps}
 */
const Grid = async ({ slice, items }) => {
	// console.log('slice', slice)
	// console.log('items', items)

	return (
		<Section
			title={slice.primary.title}
			intro={slice.primary.intro}
			backgroundColor='primary.light'
		>
			<MUI_Grid container spacing={4}>
				{items
					.sort((a, b) => (a.data?.order || 999999) - (b.data?.order || 999999))
					.map(item => {
						return (
							<MUI_Grid key={item.id} item xs={12} sm={6} md={4}>
								<PrismicLink href={item.uid}>
									<CardComponent2
										title={item.data.title}
										imageField={item.data.image}
										content={item.data.summary}
									/>
								</PrismicLink>
							</MUI_Grid>
						)
					})}
			</MUI_Grid>
			<Stack direction='row' sx={{ justifyContent: 'center', pt: 6, pb: 0 }}>
				<Button variant='contained' color='secondary' size='large'>
					Learn More
				</Button>
			</Stack>
		</Section>
	)
}

export default Grid

