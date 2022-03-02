import { useLocation } from 'react-router-dom'
// @mui
import { styled, useTheme } from '@mui/material/styles'
import { Box, AppBar, Toolbar, Container } from '@mui/material'
// hooks
import useOffSetTop from '../../hooks/useOffSetTop'
import useResponsive from '../../hooks/useResponsive'
// utils
import cssStyles from '../../utils/cssStyles'
//
import { PATH_PAGE } from '../../routes/paths'
// config
import { HEADER } from '../../config'
// components
import Logo from '../../components/Logo'
import Iconify from '../../components/Iconify'
//
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
// trans

// ----------------------------------------------------------------------

const ICON_SIZE = {
	width: 22,
	height: 22
}

const menuConfig = [
	{
		title: 'Menu 1',
		icon: <Iconify icon='fluent:shopping-bag-20-filled' {...ICON_SIZE} />,
		path: '/'
	}
]

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	height: HEADER.MOBILE_HEIGHT,
	transition: theme.transitions.create(['height', 'background-color'], {
		easing: theme.transitions.easing.easeInOut,
		duration: theme.transitions.duration.shorter
	}),
	[theme.breakpoints.up('md')]: {
		height: HEADER.MAIN_DESKTOP_HEIGHT
	}
}))

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
	left: 0,
	right: 0,
	bottom: 0,
	height: 24,
	zIndex: -1,
	margin: 'auto',
	borderRadius: '50%',
	position: 'absolute',
	width: `calc(100% - 48px)`
}))

// ----------------------------------------------------------------------

export default function MainHeader() {
	const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT)

	const theme = useTheme()

	const { pathname } = useLocation()

	const isDesktop = useResponsive('up', 'md')

	const isHome = pathname === '/' || pathname === '/business'

	return (
		<AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
			<ToolbarStyle
				disableGutters
				sx={{
					...(isOffset && {
						bgcolor: 'background.default',
						color: 'text.primary',
						height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 }
					})
				}}
			>
				<Container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Logo color={!isOffset && '#FFF'} />
					{/* <Box sx={{ flexGrow: 1 }} /> */}
					{/* {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={menuConfig} />}
					{!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={menuConfig} />} */}
				</Container>
			</ToolbarStyle>

			{isOffset && <ToolbarShadowStyle />}
		</AppBar>
	)
}
