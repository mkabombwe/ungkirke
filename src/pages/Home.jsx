// @mui
import { styled } from '@mui/material/styles'
// components
import Page from '../components/Page'
// sections

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
	height: '100%'
}))

const ContentStyle = styled('div')(({ theme }) => ({
	overflow: 'hidden',
	position: 'relative',
	backgroundColor: theme.palette.background.default
}))

// ----------------------------------------------------------------------

export default function HomePage() {
	return (
		<Page
		// title={t('sections.home.seo.title')}
		// description={t('sections.home.seo.description')}
		// keywords=''
		// url=''
		// imgUrl=''
		>
			Home
		</Page>
	)
}
