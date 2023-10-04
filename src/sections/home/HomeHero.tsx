import { Button, Typography } from '@material-tailwind/react'
import { cn } from '../../utils/cn'
import { useState } from 'react'

export default function HomeHero() {
	const [open, setOpen] = useState(false)
	return (
		<section className='text-center'>
			<div className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-4 xl:grid-cols-6'>
				<Card src='/images/IMG_0016.jpeg' />
				<Card src='/images/IMG_0018.jpg' />
				<Card src='/images/IMG_0019.jpg' className='hidden md:flex' />
				<Card src='/images/IMG_0020.jpg' className='hidden md:flex' />
				<Card src='/images/IMG_0021.jpg' className='hidden xl:flex' />
				<Card src='/images/IMG_0022.jpg' className='hidden xl:flex' />
			</div>
			<div className='max-w-md mx-auto mt-8'>
				<Typography variant='h1' className='font-extrabold'>
					Til middag hos
				</Typography>
				<p className='mt-8'>
					TV3 gjorde det først, men Ungkirke gør det bedst! Vær med når vi i Ungkirke afholder 'Til middag hos' onsdag
					d. 25 oktober kl. 18. Det bliver en skøn aften med mad, hygge og brætspil i fællesskabets tegn!
					<br />
					<br />
					Du kan tilmelde dig som vært eller deltager. Er du vært, afholder du en middag hjemme hos dig, hvor vi sender
					en gruppe gæster hjem til dig. Er du gæst, får du tildelt et hjem. Der vil være tilskud til aftensmaden til at
					gøre aftenen en kæmpe succes! Skriv gerne i kommentarfeltet hvis du ønsker at være co-vært eller ønsker en ven
					at følges med.
				</p>
				<Button className='mt-8'>Tilmeld dig nu</Button>
			</div>
		</section>
	)
}

function Card({ src, className }: { src: string; className?: string }) {
	return (
		<div className={cn('bg-white shadow-sm shadow-gray-300', className)}>
			<div className='overflow-hidden aspect-[3/4]'>
				<img src={src} className='object-cover w-full h-full p-2 pb-16' />
			</div>
		</div>
	)
}
