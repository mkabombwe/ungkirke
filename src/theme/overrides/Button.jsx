// ----------------------------------------------------------------------

export default function Button(theme) {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					'&:hover': {
						boxShadow: 'none'
					}
				},
				sizeLarge: {
					height: 48
				},
				// contained
				containedInherit: {
					color: theme.palette.grey[800]
				},
				// outlined
				outlinedInherit: {
					border: `1px solid ${theme.palette.grey[500_32]}`,
					'&:hover': {
						backgroundColor: theme.palette.action.hover
					}
				},
				textInherit: {
					'&:hover': {
						backgroundColor: theme.palette.action.hover
					}
				}
			}
		}
	}
}
