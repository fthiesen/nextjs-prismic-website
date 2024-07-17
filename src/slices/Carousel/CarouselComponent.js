'use client'

import React, { useEffect, useRef, useState } from 'react'
import CardComponent from '@/components/Card'
import Section from '@/components/Section'
import { Box, Button, Icon, Stack, useTheme, useMediaQuery } from '@mui/material'
import { PrismicNextLink } from '@prismicio/next'
import { StyledIconButton } from '@/theme'

const CarouselComponent = ({ slice, items }) => {
	const theme = useTheme()
	const scrollRef = useRef(null)
	const [scrollPosition, setScrollPosition] = useState(0)
	const [iconButtonTop, setIconButtonTop] = useState(0)

	const GAP = 16
	const isLgUp = useMediaQuery(theme.breakpoints.up('lg'))
	const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
	const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

	useEffect(() => {
		if (scrollRef.current) {
			setIconButtonTop(scrollRef.current.offsetHeight / 2 - 40 / 2)
		}
	}, [])

	useEffect(() => {
		const scrollContainer = scrollRef.current
		if (!scrollContainer) return

		const handleScroll = () => {
			setScrollPosition(scrollContainer.scrollLeft)
		}

		scrollContainer.addEventListener('scroll', handleScroll)
		return () => {
			scrollContainer.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const scrollContainer = scrollRef.current
		if (!scrollContainer) return

		// Reset the scroll position when the screen size changes
		scrollContainer.scrollLeft = 0
		setScrollPosition(0)

		// Reset the icon button position when the screen size changes
		setIconButtonTop(scrollRef.current.offsetHeight / 2 - 40 / 2)
	}, [isLgUp, isMdUp, isSmUp])

	const handleSlide = direction => {
		const scrollContainer = scrollRef.current
		if (!scrollContainer) return

		// Recalculate the scroll amount based on the new screen size
		let scrollAmount
		if (isLgUp) {
			scrollAmount = (scrollContainer.offsetWidth - GAP * 3) / 4 + GAP
		} else if (isMdUp) {
			scrollAmount = (scrollContainer.offsetWidth - GAP * 2) / 3 + GAP
		} else if (isSmUp) {
			scrollAmount = (scrollContainer.offsetWidth - GAP) / 2 + GAP
		} else {
			scrollAmount = scrollContainer.offsetWidth + GAP
		}

		scrollAmount = direction === 'right' ? -scrollAmount : scrollAmount

		scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' })
	}

	const isAtStart = scrollPosition === 0
	const isAtEnd = scrollPosition === scrollRef.current?.scrollWidth - scrollRef.current?.offsetWidth

	return (
		<Section title={slice.primary.title} backgroundColor='quaternary.main' textColor='primary-main'>
			<Stack direction='row' spacing={2} sx={{ overflowX: 'hidden' }} ref={scrollRef}>
				{items
					.sort((a, b) => (a.data?.order || 999999) - (b.data?.order || 999999))
					.map(item => {
						return (
							<Box
								key={item.id}
								sx={{
									width: {
										lg: `calc(25% - ${(GAP * 3) / 4}px)`,
										md: `calc(33.33% - ${(GAP * 2) / 3}px)`,
										sm: `calc(50% - ${GAP / 2}px)`,
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
			<StyledIconButton
				sx={{ left: -18 }}
				onClick={() => handleSlide('right')}
				disabled={isAtStart}
				top={iconButtonTop}
			>
				<Icon>chevron_left</Icon>
			</StyledIconButton>
			<StyledIconButton
				sx={{ right: -18 }}
				onClick={() => handleSlide('left')}
				disabled={isAtEnd}
				top={iconButtonTop}
			>
				<Icon>chevron_right</Icon>
			</StyledIconButton>
			<Stack direction='row' sx={{ justifyContent: 'center', p: 4 }}>
				<PrismicNextLink href={slice.primary.button_link.url}>
					<Button variant='contained' color='primary' size='large'>
						{slice.primary.button_text || 'Learn More'}
					</Button>
				</PrismicNextLink>
			</Stack>
		</Section>
	)
}

export default CarouselComponent
