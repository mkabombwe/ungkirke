import { m } from 'framer-motion'
// @mui
import { styled } from '@mui/material/styles'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
// routes
// components
import { MotionContainer, varFade } from '../../components/animate'
// import SocialsButton from '../../components/SocialsButton'
// utils
import setMarked from '../../utils/setMarked'
//
// import HomeWaitlistForm from './HomeWaitlistForm'

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
	position: 'relative',
	backgroundColor: theme.palette.grey[400],
	[theme.breakpoints.up('md')]: {
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		display: 'flex',
		position: 'fixed',
		alignItems: 'center'
	}
}))

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
	zIndex: 10,
	maxWidth: 600,
	margin: 'auto',
	textAlign: 'center',
	position: 'relative',
	paddingTop: theme.spacing(15),
	paddingBottom: theme.spacing(15),
	[theme.breakpoints.up('md')]: {
		paddingTop: theme.spacing(25),
		margin: 'unset',
		textAlign: 'left'
	}
}))

const HeroOverlayStyle = styled(m.img)({
	zIndex: 9,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute'
})

const HeroImgStyle = styled(m.img)(({ theme }) => ({
	top: 0,
	right: 0,
	bottom: 0,
	zIndex: 8,
	width: '100%',
	height: '100%',
	position: 'absolute',
	objectFit: 'cover'
}))

// ----------------------------------------------------------------------

export default function HomeHero() {
	return (
		<MotionContainer>
			<RootStyle>
				<HeroOverlayStyle
					alt='overlay'
					src='https://minimal-assets-api.vercel.app/assets/overlay.svg'
					variants={varFade().in}
				/>

				<HeroImgStyle alt='hero' src='/images/hero.jpg' variants={varFade().inUp} />

				<Container>
					<ContentStyle>
						<m.div variants={varFade().inRight}>
							<Typography variant='h1' sx={{ color: 'common.white' }}>
								{setMarked('Ungkirke<br/><m>Til middag hos</m>')}
							</Typography>
						</m.div>

						<m.div variants={varFade().inRight}>
							<Typography sx={{ color: 'common.white' }}>Vær med når vi holder til middag hos bla bla bla</Typography>
						</m.div>

						<m.div variants={varFade().inRight}>
							<Stack spacing={2.5} sx={{ display: 'flex', alignItems: { md: 'start', xs: 'center' } }}>
								<Typography variant='overline' sx={{ color: 'primary.light' }}>
									D. 12. 12 2022
								</Typography>
								<Button size='large' variant='contained'>
									Tilmeld dig nu!
								</Button>
							</Stack>
						</m.div>
					</ContentStyle>
				</Container>
			</RootStyle>
			<Box sx={{ height: { md: '100vh' } }} />
		</MotionContainer>
	)
}
