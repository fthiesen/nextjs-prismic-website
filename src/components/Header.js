'use client'

import { useEffect, useState } from 'react'
import * as prismic from '@prismicio/client'
import { PrismicText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { usePathname } from 'next/navigation'
import styled from '@emotion/styled'
import {
	AppBar,
	Button,
	Container,
	Drawer,
	Icon,
	MenuItem,
	MenuList,
	Stack,
	Toolbar,
} from '@mui/material'

const StyledHorizontalMenuList = styled(MenuList)(({ theme }) => ({
	display: 'flex',
	color: theme.palette.text.primary,
	'& :hover': {
		color: theme.palette.text.tertiary,
		backgroundColor: 'transparent !important',
		textDecoration: 'underline',
	},
	[theme.breakpoints.down('navigation')]: {
		display: 'none',
	},
}))

const MobileWrapper = styled('div')(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('navigation')]: {
		display: 'flex',
	},
}))

const StyledIconLink = styled(Icon)(({ theme }) => ({
	color: theme.palette.text.primary,
	cursor: 'pointer',
	'&:hover': {
		color: theme.palette.text.tertiary,
	},
}))

const StyledLogo = styled(PrismicNextImage)(({ theme }) => ({
	minWidth: 180,
	[theme.breakpoints.down('sm')]: {
		minWidth: 180,
	},
}))

const StyledVerticalMenuList = styled(MenuList)(({ theme }) => ({
	'& .MuiMenuItem-root': {
		fontSize: '2.6rem',
		paddingBottom: 0,
		paddingTop: 10,
		borderBottom: `1px solid ${theme.palette.text.primary}`,
		transition: 'transform 0.3s ease-in-out', // Add this line
		'&:hover': {
			color: theme.palette.primary.light,
			backgroundColor: theme.palette.text.primary,
		},
		'& a': {
			display: 'inline-block',
			transition: 'transform 0.3s ease-in-out',
		},
		'&:hover a': {
			transform: 'translateX(10px)',
		},
		'&:active a': {
			transform: 'translateX(0)',
		},
	},
}))

export const Header = ({ navigation, settings }) => {
	const pathname = usePathname()
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleOpenMenu = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	useEffect(() => {
		handleCloseMenu()
	}, [pathname])

	return (
		<AppBar position='static' sx={{ backgroundColor: 'transparent' }}>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 1,
						minHeight: '70px !important',
					}}
				>
					{/* logo */}
					<PrismicNextLink href='/'>
						<StyledLogo
							field={settings.data.logo_horizontal}
							alt={settings.data.logo_horizontal.alt || ''}
							height={40}
						/>
					</PrismicNextLink>
					{/* <PrismicText field={settings.data.siteTitle} />
					<>{settings.data.slogan && ` - ${settings.data.slogan}`}</> */}

					{/* navigation links */}
					<StyledHorizontalMenuList>
						{navigation.data?.links
							.filter(item => item.label[0].text !== 'Home')
							.map(item => {
								return (
									<MenuItem key={prismic.asText(item.label)}>
										<PrismicNextLink
											field={item.link}
											className={
												pathname === item.link.url
													? 'text-tertiary-main bg-transparent underline'
													: ''
											}
										>
											<PrismicText field={item.label} />
										</PrismicNextLink>
									</MenuItem>
								)
							})}
					</StyledHorizontalMenuList>

					{/* navigation buttons */}
					<Stack direction='row' spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
						{navigation.data.secondary_header_button_text && (
							<PrismicNextLink field={navigation.data.secondary_header_button_link}>
								<Button variant='outlined' color='secondary'>
									{navigation.data.secondary_header_button_text}
								</Button>
							</PrismicNextLink>
						)}
						{navigation.data.primary_header_button_text && (
							<PrismicNextLink field={navigation.data.primary_header_button_link}>
								<Button variant='contained' color='primary'>
									{navigation.data.primary_header_button_text}
								</Button>
							</PrismicNextLink>
						)}
					</Stack>

					{/* mobile menu */}
					<MobileWrapper>
						<StyledIconLink onClick={handleOpenMenu}>menu</StyledIconLink>
						<Drawer
							sx={{
								minWidth: { xs: '100vw', sm: 360 },
								flexShrink: 0,
								'& .MuiDrawer-paper': {
									minWidth: { xs: '100vw', sm: 360 },
									boxSizing: 'border-box',
									backgroundColor: 'primary.light',
								},
							}}
							anchor='right'
							open={open}
						>
							<StyledIconLink
								sx={{ position: 'absolute', top: 10, right: 10, fontSize: '30px !important' }}
								onClick={handleCloseMenu}
							>
								close
							</StyledIconLink>
							<StyledVerticalMenuList sx={{ mt: 5 }}>
								{navigation.data?.links.map(item => {
									return (
										<MenuItem key={prismic.asText(item.label)}>
											<PrismicNextLink field={item.link}>
												<PrismicText field={item.label} />
											</PrismicNextLink>
										</MenuItem>
									)
								})}
							</StyledVerticalMenuList>
						</Drawer>
					</MobileWrapper>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
