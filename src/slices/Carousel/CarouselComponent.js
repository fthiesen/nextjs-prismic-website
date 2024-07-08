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
	const GAP = 16

	const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
	const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

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
	}, [isMdUp, isSmUp])

	const handleSlide = direction => {
		const scrollContainer = scrollRef.current
		if (!scrollContainer) return

		// Recalculate the scroll amount based on the new screen size
		let scrollAmount
		if (isMdUp) {
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
		<Section title={slice.primary.title}>
			<Stack
				direction='row'
				spacing={2}
				sx={{ overflowX: 'hidden', position: 'relative' }}
				ref={scrollRef}
			>
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
			<StyledIconButton
				sx={{ left: { xs: -5, sm: 5 } }}
				onClick={() => handleSlide('right')}
				disabled={isAtStart}
			>
				<Icon>chevron_left</Icon>
			</StyledIconButton>
			<StyledIconButton
				sx={{ right: { xs: -5, sm: 5 } }}
				onClick={() => handleSlide('left')}
				disabled={isAtEnd}
			>
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

export default CarouselComponent
