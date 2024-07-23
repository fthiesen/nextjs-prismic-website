'use client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import { Container, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

export const Footer = ({ settings }) => {
	const ICON_SIZE = 28
	const ICONS = {
		Facebook: FacebookIcon,
		Instagram: InstagramIcon,
	}

	return (
		<Container
			component='footer'
			maxWidth={false}
			sx={{ backgroundColor: 'primary.main', color: 'text.primary' }}
		>
			<Container maxWidth='xl' sx={{ py: { xs: 4, sm: 6 } }}>
				<Stack
					direction='row'
					sx={{
						flexWrap: 'wrap',
						gap: 2,
						justifyContent: { xs: 'center', md: 'space-between' },
						alignItems: 'center',
						flexDirection: { xs: 'column', md: 'row' },
					}}
				>
					{/* logo */}
					<Stack
						direction='row'
						spacing={1}
						sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
					>
						<PrismicNextLink href='/'>
							<PrismicNextImage
								field={settings.data.logo_horizontal_monochromatic}
								alt={settings.data.logo_horizontal_monochromatic.alt || ''}
								height={60}
							/>
						</PrismicNextLink>
					</Stack>

					{/* contact */}
					<Stack
						sx={{
							justifyContent: 'çenter',
							alignItems: 'center',
							height: '100%',
						}}
					>
						<Typography>{settings.data.address}</Typography>
						<Typography sx={{ mt: -0.5 }}>{settings.data.phone}</Typography>
					</Stack>

					{/* social media icons */}
					<Stack
						direction='row'
						spacing={1}
						sx={{
							justifyContent: { xs: 'center', sm: 'flex-end' },
							alignItems: 'center',
							height: '100%',
						}}
					>
						{settings.data.email && (
							<PrismicNextLink href={`mailto:${settings.data.email}`}>
								<MailOutlineIcon style={{ fontSize: ICON_SIZE }} />
							</PrismicNextLink>
						)}
						{settings.data.icon_links.map((iconLink, index) => {
							const IconName = ICONS[iconLink.name]
							return (
								<PrismicNextLink field={iconLink.link} key={index}>
									<IconName style={{ fontSize: ICON_SIZE }} />
								</PrismicNextLink>
							)
						})}
					</Stack>
				</Stack>

				{/* copyright */}
				<Stack
					direction='row'
					sx={{
						mt: { xs: 3, sm: 6 },
						alignItems: 'center',
						justifyContent: { xs: 'center', sm: 'space-between' },
						flexDirection: { xs: 'column', sm: 'row' },
						mb: { xs: -2, sm: -3 },
					}}
				>
					<Typography sx={{ fontSize: '1.2rem' }}>
						© {settings.data.copyright_year && `${settings.data.copyright_year}-`}
						{new Date().getFullYear()} Yoga Grove - All Rights Reserved
					</Typography>
					<Typography sx={{ fontSize: '1.2rem' }}>
						<PrismicNextLink href='https://fecodes.netlify.app' target='_blank'>
							Developed by Fernanda Thiesen
						</PrismicNextLink>
					</Typography>
				</Stack>
			</Container>
		</Container>
	)
}
