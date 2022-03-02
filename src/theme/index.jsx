import { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles'
// hooks

//
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
	const isLight = true

	const themeOptions = useMemo(
		() => ({
			palette: isLight ? palette.light : palette.dark,
			typography,
			breakpoints,
			shape: { borderRadius: 0 },
			direction: 'ltr',
			shadows: isLight ? shadows.light : shadows.dark,
			customShadows: isLight ? customShadows.light : customShadows.dark
		}),
		[isLight]
	)

	const theme = createTheme(themeOptions)
	theme.components = componentsOverride(theme)

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	)
}
