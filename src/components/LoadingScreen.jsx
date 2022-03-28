import { m } from 'framer-motion'
// @mui
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
//
import ProgressBar from './ProgressBar'
import Logo from './Logo'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	right: 0,
	bottom: 0,
	zIndex: 99999,
	width: '100%',
	height: '100%',
	position: 'fixed',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: theme.palette.background.default
}))

// ----------------------------------------------------------------------

export default function LoadingScreen({ isDashboard, ...other }) {
	return (
		<>
			<ProgressBar />

			<RootStyle {...other}>
				<Logo />
			</RootStyle>
		</>
	)
}
