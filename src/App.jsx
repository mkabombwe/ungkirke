import smoothscroll from 'smoothscroll-polyfill'
import Router from './routes'
import ThemeProvider from './theme'
import NotistackProvider from './components/NotistackProvider'
import ScrollToTop from './components/ScrollToTop'
import { ProgressBarStyle } from './components/ProgressBar'
import MotionLazyContainer from './components/animate/MotionLazyContainer'

// ----------------------------------------------------------------------

smoothscroll.polyfill()

export default function App() {
	return (
		<ThemeProvider>
			<NotistackProvider>
				<MotionLazyContainer>
					<ProgressBarStyle />
					<ScrollToTop />
					<Router />
				</MotionLazyContainer>
			</NotistackProvider>
		</ThemeProvider>
	)
}
