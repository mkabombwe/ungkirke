import { createRef } from 'react'
import { SnackbarProvider, closeSnackbar } from 'notistack'
import ThemeProvider from '../theme/ThemeProvider'
import HomeHero from '../sections/home/HomeHero'
import MainLayout from '../layout'

function App() {
	const notistackRef = createRef<SnackbarProvider>()

	return (
		<ThemeProvider>
			<SnackbarProvider
				ref={notistackRef}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
				preventDuplicate
				// classes={{ root: 'bg-blue' }}
				// className='bg-blue'
				classes={{ containerRoot: 'z-alert' }}
				action={(snackbarId) => <button onClick={() => closeSnackbar(snackbarId)}>Dismiss</button>}
			>
				<MainLayout>
					<HomeHero />
				</MainLayout>
			</SnackbarProvider>
		</ThemeProvider>
	)
}

export default App
