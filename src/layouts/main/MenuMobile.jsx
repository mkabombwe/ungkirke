import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { NavLink as RouterLink, useLocation } from 'react-router-dom'
// @mui
import { alpha, styled } from '@mui/material/styles'
import { Box, List, Link, Drawer, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material'
// config
import { NAVBAR } from '../../config'
// components
// import Logo from '../../components/Logo'
import Iconify from '../../components/Iconify'
import Scrollbar from '../../components/Scrollbar'
import { IconButtonAnimate } from '../../components/animate'
import { NavSectionVertical } from '../../components/nav-section'

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
	...theme.typography.body2,
	height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
	textTransform: 'none',
	color: theme.palette.text.secondary
}))

// ----------------------------------------------------------------------

MenuMobile.propTypes = {
	isOffset: PropTypes.bool,
	isHome: PropTypes.bool,
	navConfig: PropTypes.array
}

export default function MenuMobile({ isOffset, isHome, navConfig }) {
	const { pathname } = useLocation()

	const [drawerOpen, setDrawerOpen] = useState(false)

	useEffect(() => {
		if (drawerOpen) {
			handleDrawerClose()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	const handleDrawerOpen = () => {
		setDrawerOpen(true)
	}

	const handleDrawerClose = () => {
		setDrawerOpen(false)
	}

	return (
		<>
			<IconButtonAnimate
				onClick={handleDrawerOpen}
				sx={{
					ml: 1,
					...(isHome && { color: 'common.white' }),
					...(isOffset && { color: 'text.primary' })
				}}
			>
				<Iconify icon={'eva:menu-2-fill'} />
			</IconButtonAnimate>

			<Drawer
				open={drawerOpen}
				onClose={handleDrawerClose}
				ModalProps={{ keepMounted: true }}
				PaperProps={{ sx: { pb: 5, width: 260 } }}
			>
				<Scrollbar>
					{/* <Logo sx={{ mx: 2.5, my: 3 }} /> */}
					logo

					<List disablePadding>
						{navConfig.map((link) => (
							<MenuMobileItem key={link.title} item={link} />
						))}
					</List>
				</Scrollbar>
			</Drawer>
		</>
	)
}

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
	item: PropTypes.shape({
		children: PropTypes.array,
		icon: PropTypes.any,
		path: PropTypes.string,
		title: PropTypes.string
	})
}

function MenuMobileItem({ item }) {
	const [open, setOpen] = useState(false)
	const { title, path, icon, children } = item

	const handleOpen = () => {
		setOpen(!open)
	}

	if (children) {
		return (
			<>
				<ListItemStyle onClick={handleOpen}>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText disableTypography primary={title} />
					<Iconify
						icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
						sx={{ width: 16, height: 16, ml: 1 }}
					/>
				</ListItemStyle>

				<Collapse in={open} timeout='auto' unmountOnExit>
					<Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
						<NavSectionVertical navConfig={children} />
					</Box>
				</Collapse>
			</>
		)
	}

	if (title === 'Documentation') {
		return (
			<ListItemStyle href={path} target='_blank' rel='noopener' component={Link}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText disableTypography primary={title} />
			</ListItemStyle>
		)
	}

	return (
		<ListItemStyle
			to={path}
			component={RouterLink}
			end={path === '/'}
			sx={{
				'&.active': {
					color: 'primary.main',
					fontWeight: 'fontWeightMedium',
					bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
				}
			}}
		>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText disableTypography primary={title} />
		</ListItemStyle>
	)
}
