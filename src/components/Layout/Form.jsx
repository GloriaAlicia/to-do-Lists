import { useId } from 'react'
import { useForm } from '../../hooks/useForm'
import { validText } from '../../helpers/validText'
import * as At from '../Atoms'

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
			<At.LabelText htmlFor={constantId}> {labelText }</At.LabelText>
			
			<At.InputText
				name='task'
				placeholder={placeholder}
				autoComplete='off'
				value={task}
				id={constantId}
				onChange={handleInputChange}
			/>

			{buttonText ? (
				<button onClick={handleSubmit}> {buttonText} </button>
			) : undefined}
		</form>
	)
}
