import { Suspense, lazy } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
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
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{ element: <ComeDine />, index: true },
				{ path: 'til-middag-hos', element: <ComeDine /> }
			]
		}
	])
}

// IMPORT COMPONENTS
// Main
const ComeDine = Loadable(lazy(() => import('../pages/ComeDine')))
