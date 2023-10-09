import { IconButton } from '@material-tailwind/react'
import Iconify from '../components/Iconify'
import Logo from '../components/Logo'

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

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='container'>
			<header className='flex items-center justify-center'>
				<Logo className='w-[150px] py-4' />
			</header>
			<main className='flex'>{children}</main>
			<footer className='flex flex-col items-center justify-center py-10 text-center'>
				<Logo className='w-[150px] py-4' />
				<div className='flex justify-center space-x-4'>
					{SOCIALS.map(({ name, icon, path }) => (
						<a key={name} href={path}>
							<IconButton className='rounded-full'>
								<Iconify icon={icon} />
							</IconButton>
						</a>
					))}
				</div>
			</footer>
		</div>
	)
}
