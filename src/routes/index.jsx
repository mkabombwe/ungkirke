import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'
// layouts
import MainLayout from '../layouts/main'
// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { pathname } = useLocation()

	return (
		<Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
			<Component {...props} />
		</Suspense>
	)
}

export default function Router() {
	return useRoutes([
		// Main Routes
		// {
		// 	path: '*',
		// 	element: <LogoOnlyLayout />,
		// 	children: [
		// 		{ path: 'coming-soon', element: <ComingSoon /> },
		// 		{ path: 'waitlist', element: <Waitlist /> },
		// 		{ path: 'maintenance', element: <Maintenance /> },
		// 		{ path: '500', element: <Page500 /> },
		// 		{ path: '404', element: <NotFound /> },
		// 		{ path: '*', element: <Navigate to='/404' replace /> }
		// 	]
		// },
		{
			path: '/',
			element: <MainLayout />,
			children: [
				// { element: <HomePage />, index: true },
				{ element: <ComeDine />, index: true },
				{ path: 'til-middag-hos', element: <ComeDine /> }
			]
		}
		// { path: '*', element: <Navigate to='/404' replace /> }
	])
}

// IMPORT COMPONENTS
// Main
const HomePage = Loadable(lazy(() => import('../pages/Home')))
const ComeDine = Loadable(lazy(() => import('../pages/ComeDine')))
