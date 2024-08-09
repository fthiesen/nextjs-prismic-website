import CardComponent from '@/components/Card'
import Section from '@/components/Section'
import { createClient } from '@/prismicio'
import { Button, Grid as MUI_Grid, Stack } from '@mui/material'

/**
 * @typedef {import("@prismicio/client").Content.GridSlice} GridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridSlice>} GridProps
 * @param {GridProps}
 */
const Grid = async ({ slice }) => {
	const client = createClient()
	const contentType = slice.primary.content.type
	const items = await client.getAllByType(contentType)

	return (
		<Section title={slice.primary.title}>
			<MUI_Grid container spacing={2}>
				{items
					.sort((a, b) => (a.data?.order || 999999) - (b.data?.order || 999999))
					.map(item => {
						return (
							<MUI_Grid key={item.id} item xs={12} sm={6} md={4}>
								<CardComponent
									title={item.data.name}
									imageField={item.data.profile_picture}
									content={item.data.summary}
								/>
							</MUI_Grid>
						)
					})}
			</MUI_Grid>
			<Stack direction='row' sx={{ justifyContent: 'center', p: 4 }}>
				<Button variant='contained' color='primary'>
					Learn More
				</Button>
			</Stack>
		</Section>
	)
}

export default Grid

