import { Box } from '@mui/material'
import parse, { domToReact } from 'html-react-parser'

export default function setMarked(text) {
	const options = {
		// eslint-disable-next-line consistent-return
		replace: ({ name, children }) => {
			if (name === 'm')
				return (
					<Box component='span' sx={{ color: (theme) => theme.palette.primary.main }}>
						{domToReact(children, options)}
					</Box>
				)
		}
	}

	return parse(text, options)
}
