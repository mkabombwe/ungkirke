// scroll bar
import 'simplebar-react/dist/simplebar.min.css'

// lightbox
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css'

// ----------------------------------------------------------------------

import { CacheProvider } from '@emotion/react'
// next
import Head from 'next/head'
import createEmotionCache from '@/utils/createEmotionCache'
// theme
import ThemeProvider from '@/theme'
// components
import SnackbarProvider from '@/components/snackbar'
import { MotionLazyContainer } from '@/components/animate'

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, pageProps, emotionCache = clientSideEmotionCache } = props

	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>

			<MotionLazyContainer>
				<ThemeProvider>
					<SnackbarProvider>{getLayout(<Component {...pageProps} />)}</SnackbarProvider>
				</ThemeProvider>
			</MotionLazyContainer>
		</CacheProvider>
	)
}
