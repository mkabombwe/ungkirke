import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1200px'
			}
		},
		fontFamily: {
			barlow: ['"Barlow"', ...fontFamily.sans],
			'public-sans': ['"Public Sans"', ...fontFamily.sans]
		},
		extend: {
			colors: {
				background: 'hsl(var(--background))'
			}
		}
	},
	plugins: []
} satisfies Config)
