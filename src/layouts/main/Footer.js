// @mui
import { Box, Stack, Container, IconButton } from '@mui/material'
// components
import Logo from '@/components/logo'
import Iconify from '@/components/iconify'

// ----------------------------------------------------------------------

const SOCIALS = [
	{
		name: 'Facebook',
		icon: 'eva:facebook-fill',
		path: 'https://www.facebook.com/UNGKIRKE'
	},
	{
		name: 'Instagram',
		icon: 'ant-design:instagram-filled',
		path: 'https://www.instagram.com/ungkirke.aalborg/?hl=en'
	}
]
// ----------------------------------------------------------------------

export default function Footer() {
	return (
		<Box
			component='footer'
			sx={{
				py: 4,
				textAlign: 'center',
				position: 'relative',
				bgcolor: 'background.default'
			}}
		>
			<Container>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Logo sx={{ mx: 'auto' }} />

					<Stack
						spacing={1}
						direction='row'
						justifyContent={{ xs: 'center', md: 'flex-start' }}
						sx={{
							mt: 2,
							mb: { xs: 5, md: 0 }
						}}
					>
						{SOCIALS.map((social) => (
							<IconButton key={social.name} href={social.path}>
								<Iconify icon={social.icon} />
							</IconButton>
						))}
					</Stack>
				</Box>
			</Container>
		</Box>
	)
}
