'use client'

import { forwardRef } from 'react'
import { Icon, type IconifyIcon } from '@iconify/react'
import { cn } from '../utils'

// ----------------------------------------------------------------------

interface Props {
	width?: number
	icon: IconifyIcon | string
	style?: any
	ref?: any
	className?: string
}

const Iconify = forwardRef<SVGElement, Props>(({ icon, style, className, ...other }, ref) => (
	<Icon
		ref={ref}
		icon={icon}
		className={cn('h-[24px] w-[24px]', className)}
		style={{ ...style }}
		{...other}
	/>
))

Iconify.displayName = 'Iconify'

export { Iconify }
