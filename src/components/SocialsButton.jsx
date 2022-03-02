// @mui
import { alpha } from '@mui/material/styles'
import { Link, Stack, Button, Tooltip, IconButton } from '@mui/material'
//
import Iconify from './Iconify'
import { useLocation } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function SocialsButton({ initialColor = false, simple = true, links = {}, sx, ...other }) {
	const SOCIALS = [
		{
			name: 'Facebook',
			icon: 'eva:facebook-fill',
			socialColor: '#1877F2',
			path: 'https://www.facebook.com/UNGKIRKE'
		},
		{
			name: 'Instagram',
			icon: 'ant-design:instagram-filled',
			socialColor: '#E02D69',
			path: 'https://www.instagram.com/ungkirke.aalborg/?hl=en'
		}
	]

	const { pathname } = useLocation()
	const isPartnerPage = pathname.includes('partners')

	return (
		<Stack direction='row' flexWrap='wrap' alignItems='center' sx={{ margin: '-12px' }}>
			{SOCIALS.map((social) => {
				const { name, icon, path, socialColor } = social
				return simple ? (
					<Link key={name} href={path} target='_blank'>
						<Tooltip title={name} placement='top'>
							<IconButton
								color='inherit'
								sx={{
									...(initialColor && {
										color: socialColor,
										'&:hover': {
											bgcolor: alpha(socialColor, 0.08)
										}
									}),
									...sx
								}}
								{...other}
							>
								<Iconify icon={icon} sx={{ width: 20, height: 20, color: isPartnerPage && '#000' }} />
							</IconButton>
						</Tooltip>
					</Link>
				) : (
					<Button
						key={name}
						href={path}
						target='_blank'
						color='inherit'
						variant='outlined'
						size='small'
						startIcon={<Iconify icon={icon} />}
						sx={{
							m: 0.5,
							flexShrink: 0,
							...(initialColor && {
								color: socialColor,
								borderColor: socialColor,
								'&:hover': {
									borderColor: socialColor,
									bgcolor: alpha(socialColor, 0.08)
								}
							}),
							...sx
						}}
						{...other}
					>
						{name}
					</Button>
				)
			})}
		</Stack>
	)
}
