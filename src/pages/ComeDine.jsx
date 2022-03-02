// @mui
import { styled } from '@mui/material/styles'
// components
import Page from '../components/Page'
// sections
import { HomeHero } from '../sections/home'
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

export default function ComeDine() {
	return (
		<Page
			title={'Til middag hos | Ungkirke'}
			// description={t('sections.home.seo.description')}
			// keywords=''
			// url=''
			// imgUrl=''
		>
			<RootStyle>
				<ContentStyle>
					<HomeHero />
				</ContentStyle>
			</RootStyle>
		</Page>
	)
}
