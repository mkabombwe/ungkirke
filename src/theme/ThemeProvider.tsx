'use client'

import { ThemeProvider as MuiThemeProvider } from '@material-tailwind/react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	return <MuiThemeProvider>{children}</MuiThemeProvider>
}
