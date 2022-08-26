import * as Yup from 'yup'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
// form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// components
import { FormProvider, RHFTextField, RHFSelect } from '../../components/hook-form'
// config
import { DB } from '../../config'
// firebase
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
// @mui
import { Stack, Alert, Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { LoadingButton } from '@mui/lab'

export default function HomeWaitlistForm() {
	const { enqueueSnackbar } = useSnackbar()
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	const RegisterSchema = Yup.object().shape({
		firstName: Yup.string().required('Fornavn må ikke være tom'),
		lastName: Yup.string().required('Efternavn må ikke være tom'),
		email: Yup.string().email('Email skal være gyldig').required('Email må ikke være tom'),
		phone: Yup.string()
			.matches(/^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/, 'Nummeret er ikke gyldigt')
			.required('Nummer må ikke være tom'),
		message: Yup.string().optional(),
		type: Yup.string()
	})

	const defaultValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
		type: 'Vært'
	}

	const methods = useForm({
		resolver: yupResolver(RegisterSchema),
		defaultValues
	})

	const {
		reset,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = methods

	const onSubmit = async (data) => {
		try {
			const docRef = doc(DB, 'events', 'tilmiddaghos-29-09-22')

			// Atomically add a new region to the "regions" array field.
			await updateDoc(docRef, {
				participants: arrayUnion(data)
			})

			enqueueSnackbar('Tak for din tilmelding! Vi glæder os til at se dig')
			reset()
			setOpen(false)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Button size='large' variant='contained' onClick={handleClick}>
				Tilmeld dig nu!
			</Button>
			<Dialog open={open} onClose={handleClick} fullWidth>
				<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
					<DialogContent>
						<Stack spacing={2}>
							{!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}

							<RHFTextField name='firstName' label='Fornavn' fullWidth />
							<RHFTextField name='lastName' label='Efternavn' fullWidth />
							<RHFTextField name='email' label='E-mail' fullWidth />
							<RHFTextField name='phone' label='Telefon' fullWidth />
							<RHFTextField name='message' label='Besked' fullWidth />

							<RHFSelect name='type' label='Type' fullWidth>
								<option value='deltager' defaultChecked>
									Deltager
								</option>
								<option value='vært'>Vært</option>
							</RHFSelect>
						</Stack>
					</DialogContent>
					<DialogActions>
						<LoadingButton fullWidth size='large' type='submit' variant='contained' loading={isSubmitting}>
							Tilmeld dig
						</LoadingButton>
					</DialogActions>
				</FormProvider>
			</Dialog>
		</>
	)
}
