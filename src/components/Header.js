'use client'

import * as prismic from '@prismicio/client'
import { PrismicText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import styled from '@emotion/styled'
import { AppBar, Button, Container, MenuItem, MenuList, Stack, Toolbar } from '@mui/material'

const StyledMenuList = styled(MenuList)(({ theme }) => ({
	display: 'flex',
	color: theme.palette.text.primary,
	'& :hover': {
		color: theme.palette.text.tertiary,
		backgroundColor: 'transparent !important',
		textDecoration: 'underline',
	},
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}))

export const Header = ({ navigation, settings }) => {
	console.log('test', settings.data)
	return (
		<AppBar position='static' sx={{ backgroundColor: 'transparent' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
					<PrismicNextLink href='/'>
						{/* <PrismicText field={settings.data.siteTitle} />
        <>{settings.data.slogan && ` - ${settings.data.slogan}`}</> */}
						<PrismicNextImage
							field={settings.data.logo_horizontal}
							alt={settings.data.logo_horizontal.alt}
							height={40}
						/>
					</PrismicNextLink>
					<StyledMenuList>
						{navigation.data?.links.map(item => {
							return (
								<MenuItem key={prismic.asText(item.label)}>
									<PrismicNextLink field={item.link}>
										<PrismicText field={item.label} />
									</PrismicNextLink>
								</MenuItem>
							)
						})}
					</StyledMenuList>
					<Stack direction='row' spacing={1}>
						<PrismicNextLink field={navigation.data.primary_header_button_link}>
							<Button variant='outlined' color='secondary'>
								{navigation.data.secondary_header_button_text}
							</Button>
						</PrismicNextLink>
						<PrismicNextLink field={navigation.data.primary_header_button_link}>
							<Button variant='contained' color='primary'>
								{navigation.data.primary_header_button_text}
							</Button>
						</PrismicNextLink>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

