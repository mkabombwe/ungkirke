import Logo from '../components/Logo'

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='container'>
			<header className='flex items-center justify-center'>
				<Logo className="w-[150px] py-4" />
			</header>
			<main className='flex'>{children}</main>
		</div>
	)
}
