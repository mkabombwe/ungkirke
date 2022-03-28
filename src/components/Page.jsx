import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { forwardRef } from 'react'
// @mui
import { Box } from '@mui/material'

// ----------------------------------------------------------------------

const Page = forwardRef((props, ref) => {
	const {
		children,
		title = '',
		description = '',
		keywords = '',
		url = '',
		type = 'website',
		imgUrl = '',
		...other
	} = props
	return (
		<>
			<Helmet>
				{title && <title>{title} | Ungkirke</title>}
				{title && <meta name='title' content={title + ' | Worthmore'} />}
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				{/* <!-- SoMe Metatags --> * */}
				<meta property='og:url' content={url} />
				<meta property='og:type' content={type} />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={imgUrl} />
				<meta property='twitter:card' content={imgUrl} />
				<meta property='twitter:url' content={url} />
				<meta property='twitter:title' content={title} />
				<meta property='twitter:description' content={description} />
				<meta property='twitter:image' content={imgUrl} />
			</Helmet>

			<Box ref={ref} {...other}>
				{children}
			</Box>
		</>
	)
})

Page.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
	url: PropTypes.string,
	imgUrl: PropTypes.string
}

export default Page
