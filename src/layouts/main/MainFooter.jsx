import { Link as RouterLink } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles'
import { Grid, Link, Divider, Container, Typography, Stack, Box } from '@mui/material'
// routes
import { PATH_PAGE } from '../../routes/paths'
// components
// import Logo from '../../components/Logo'
import SocialsButton from '../../components/SocialsButton'
import Logo from '../../components/Logo'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	backgroundColor: theme.palette.background.default
}))

// ----------------------------------------------------------------------

export default function MainFooter() {
	return (
		<RootStyle>
			<Container sx={{ pb: 8 }}>
				<Grid container direction='column' alignItems='center'>
					<Grid item>
						<Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
					</Grid>
					<Grid item>
						<SocialsButton />
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}
