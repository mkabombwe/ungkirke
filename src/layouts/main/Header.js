// @mui
import { useTheme } from '@mui/material/styles'
import { Box, AppBar, Toolbar, Container } from '@mui/material'
// hooks
import useOffSetTop from '@/hooks/useOffSetTop'
// utils
import { bgBlur } from '@/utils/cssStyles'
import { HEADER } from '@/utils/config'
// components
import Logo from '@/components/logo'

// ----------------------------------------------------------------------

export default function Header() {
	const theme = useTheme()

	const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP)

	return (
		<AppBar color='transparent' sx={{ boxShadow: 0 }}>
			<Toolbar
				disableGutters
				sx={{
					height: {
						xs: HEADER.H_MOBILE,
						md: HEADER.H_MAIN_DESKTOP
					},
					transition: theme.transitions.create(['height', 'background-color'], {
						easing: theme.transitions.easing.easeInOut,
						duration: theme.transitions.duration.shorter
					}),
					...(isOffset && {
						...bgBlur({ color: theme.palette.background.default }),
						height: {
							md: HEADER.H_MAIN_DESKTOP - 16
						}
					})
				}}
			>
				<Container
					sx={{
						height: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Logo color={isOffset ? '#000' : '#FFF'} />
				</Container>
			</Toolbar>

			{isOffset && <Shadow />}
		</AppBar>
	)
}

// ----------------------------------------------------------------------

function Shadow({ sx, ...other }) {
	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				bottom: 0,
				height: 24,
				zIndex: -1,
				m: 'auto',
				borderRadius: '50%',
				position: 'absolute',
				width: `calc(100% - 48px)`,
				boxShadow: (theme) => theme.customShadows.z8,
				...sx
			}}
			{...other}
		/>
	)
}
