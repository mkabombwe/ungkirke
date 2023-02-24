// layouts
import MainLayout from '@/layouts/main/MainLayout'
// sections
import { HomeHero } from '@/sections/home'
import Head from 'next/head'

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>

// ----------------------------------------------------------------------

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Ungkirke</title>
			</Head>
			<HomeHero />
		</>
	)
}
