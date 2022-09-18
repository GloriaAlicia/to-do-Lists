import { useId } from 'react'
import { useForm } from '../../hooks/useForm'
import { validText } from '../../helpers/validText'
import * as At from '../Atoms'
import * as Button from '../Buttons'

export const Form = ({
	submit,
	placeholder,
	labelText,
	textValue,
	buttonText,
}) => {
	const initialState = textValue || ''

	const [{ task }, handleInputChange, reset] = useForm({
		task: initialState,
	})

	const constantId = useId()

	const handleSubmit = (e) => {
		e.preventDefault()
		validText(task) ? submit(task) : console.log('text empty')
		reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			
			<At.InputText
				name='task'
				placeholder={placeholder}
				autoComplete='off'
				maxLength={150}
				value={task}
				id={constantId}
				onChange={handleInputChange}
			/>

			{buttonText ? (
				<Button.Primary onClick={handleSubmit} > {buttonText} </Button.Primary>
			) : undefined}
		</form>
	)
}
