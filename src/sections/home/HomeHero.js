import { m, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles'
import { Button, Box, Link, Container, Typography, Stack, Grid, Rating } from '@mui/material'
// components
import { MotionContainer, varFade } from '../../components/animate'
// utils
import setMarked from '@/utils/setMarked'
import HomeWaitlist from './HomeWaitlist'

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,.75), rgba(0,0,0, .90)), url(/assets/background/hero.png)',
	// filter: 'grayscale(100%)',
	top: 0,
	left: 0,
	width: '100%',
	height: '100vh',
	position: 'fixed'
}))

const StyledDescription = styled('div')(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: theme.spacing(15, 0),
	height: '100%',
	color: '#FFF'
}))

// ----------------------------------------------------------------------

export default function HomeHero() {
	return (
		<>
			<StyledRoot>
				<Container component={MotionContainer} sx={{ height: 1 }}>
					<Description />
				</Container>
			</StyledRoot>

			<Box sx={{ height: { md: '100vh' } }} />
		</>
	)
}

// ----------------------------------------------------------------------

function Description() {
	return (
		<StyledDescription>
			<Typography variant='h1' component={m.h1} variants={varFade().in} gutterBottom>
				{setMarked('Ungkirke<br/><m>Til middag hos</m>')}
			</Typography>

			<Typography component={m.p} variants={varFade().in}>
				Vær med når vi i Ungkirke afholder ‘Til middag hos’ d. 22. marts kl. 18. Det bliver en skøn aften med mad, hygge
				og brætspil i fællesskabets tegn!
				<br />
				Du kan tilmelde dig som vært eller deltager. Er du vært, afholder du en middag hjemme hos dig, hvor vi sender en
				gruppe gæster hjem til dig. Er du gæst, får du tildelt et hjem. Der vil være tilskud til aftensmaden til at gøre
				aftenen en kæmpe succes! Skriv gerne i kommentarfeltet hvis du ønsker at være co-vært eller ønsker en ven at
				følges med.
			</Typography>

			<Typography variant='overline' sx={{ color: 'primary.light', mt: 4 }} component={m.p} variants={varFade().in}>
				Håber vi ses til en super hyggelig aften med alt det gode!
			</Typography>
			<HomeWaitlist />
		</StyledDescription>
	)
}
