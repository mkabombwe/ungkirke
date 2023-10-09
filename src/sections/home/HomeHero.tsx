import { useState } from 'react'
import { object, string, z } from 'zod'
import { Button, Dialog, DialogBody, DialogFooter, Input, Textarea, Typography } from '@material-tailwind/react'
import { cn } from '../../utils/cn'
import FormProvider from '../../components/FormProvider'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { DB } from '../../utils/firebase'

export default function HomeHero() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(!open)

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
				<Button type='button' className='mt-8' onClick={handleOpen}>
					Tilmeld dig nu
				</Button>
			</div>
			<Waitlist open={open} handleOpen={handleOpen} />
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

// ----------------------------------------------------------------------

const RegisterSchema = object({
	name: string().nonempty(),
	message: string(),
	type: string().nonempty()
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

function Waitlist({ open, handleOpen }: { open: boolean; handleOpen: () => void }) {
	const { enqueueSnackbar } = useSnackbar()

	const defaultValues: RegisterSchemaType = {
		name: '',
		message: '',
		type: 'deltager'
	}

	const methods = useForm({
		resolver: zodResolver(RegisterSchema),
		defaultValues
	})

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = methods

	const onSubmit = async (data: RegisterSchemaType) => {
		try {
			const docRef = doc(DB, 'events', 'tilmiddaghos-25-10-23')

			await updateDoc(docRef, {
				participants: arrayUnion(data)
			})

			enqueueSnackbar('Tak for din tilmelding! Vi glæder os til at se dig', { variant: 'success' })
			reset()
			handleOpen()
		} catch (error) {
			enqueueSnackbar('Der skete en fejl under tilmeldingen!', { variant: 'error' })
			console.error(error)
		}
	}

	return (
		<Dialog
			open={open}
			handler={handleOpen}
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0.9, y: -100 }
			}}
		>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<DialogBody className='flex flex-col gap-4'>
					<Input crossOrigin={undefined} type='text' label='Navn' {...register('name')} />

					<div className='relative h-10 min-w-[200px]'>
						<select
							{...register('type')}
							className={cn(
								'peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-textBody outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50',
								{
									'border-red-500 border-t-transparent text-red-500 placeholder-red-500': errors.type
								},
								{
									'border-primary border-t-transparent placeholder-primary': !errors.type
								}
							)}
						>
							<option value='deltager'>Deltager</option>
							<option value='vært'>Vært</option>
						</select>
						<label
							className={cn(
								"before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
								{
									'text-red-500 before:border-red-500 after:border-red-500': errors.type
								},
								{
									'text-primary before:border-primary after:border-primary': !errors.type
								}
							)}
						>
							Type
						</label>
					</div>
					<Textarea label='Message' {...register('message')} />
				</DialogBody>
				<DialogFooter>
					<Button variant='text' onClick={handleOpen} className='mr-1'>
						<span>Cancel</span>
					</Button>
					<Button type='submit' variant='gradient'>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</FormProvider>
		</Dialog>
	)
}
