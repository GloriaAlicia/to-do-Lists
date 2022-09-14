import { useId } from 'react'

import { useForm } from '../hooks/useForm'
import { validText } from '../helpers/validText'
import '../App.css'

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
		const valid = validText(task)
		valid ? submit(task) : console.log('text empty')
		reset()
	}

	return (
		<form onSubmit={handleSubmit} className='flex'>
			<label htmlFor={constantId}> {labelText} </label>

			<input
				type='text'
				name='task'
				className='inputData'
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
