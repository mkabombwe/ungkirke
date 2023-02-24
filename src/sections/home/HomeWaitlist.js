import * as Yup from 'yup'
import { useState } from 'react'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
// form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// components
import FormProvider, { RHFTextField, RHFSelect } from '../../components/hook-form'
import { useSnackbar } from '@/components/snackbar'
// config
import { DB } from '@/utils/firebase'
// @mui
import { Alert, Button, Dialog, DialogActions, DialogContent, Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'

export default function HomeWaitlist() {
	const { enqueueSnackbar } = useSnackbar()
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	const RegisterSchema = Yup.object().shape({
		name: Yup.string().required('Navn må ikke være tom'),
		message: Yup.string().optional(),
		type: Yup.string()
	})

	const defaultValues = {
		name: '',
		message: '',
		type: 'deltager'
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
			const docRef = doc(DB, 'events', 'tilmiddaghos-22-03-23')

			await updateDoc(docRef, {
				participants: arrayUnion(data)
			})

			enqueueSnackbar('Tak for din tilmelding! Vi glæder os til at se dig', { variant: 'success' })
			reset()
			setOpen(false)
		} catch (error) {
			enqueueSnackbar('Der skete en fejl under tilmeldingen!', { variant: 'error' })
			console.error(error)
		}
	}

	return (
		<>
			<Button variant='contained' onClick={handleClick} sx={{ mt: 4 }}>
				Tilmeld dig nu!
			</Button>

			<Dialog open={open} onClose={handleClick} fullWidth>
				<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
					<DialogContent sx={{ pt: 4 }}>
						<Grid container spacing={2}>
							{!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}

							<Grid item xs={12}>
								<RHFTextField name='name' label='Fulde navn' fullWidth />
							</Grid>

							<Grid item xs={12}>
								<RHFSelect native name='type' label='Type'>
									<option value='deltager'>Deltager</option>
									<option value='vært'>Vært</option>
								</RHFSelect>
							</Grid>
							<Grid item xs={12}>
								<RHFTextField name='message' label='Kommentar' multiline rows={3} fullWidth />
							</Grid>
						</Grid>
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
