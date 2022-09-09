import { useState, useContext } from 'react'
import '../../App.css'
import { AllLists } from '../../context'

export const Form = ({
	submit,
	placeholder,
	id,
	labelText,
	buttonText,
	textValue,
}) => {
	const initialState = textValue || ''
	const [state, setState] = useState(initialState)

	const { lists, setLists, actualList } = useContext(AllLists)

	const handleInputChange = ({ target }) => {
		setState(target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		submit(state, actualList, lists)
		setState('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='flex'>
				<label htmlFor={id}> {labelText} </label>

				<input
					type='text'
					name='task'
					className='inputData'
					placeholder={placeholder}
					autoComplete='off'
					value={state}
					id={id}
					onChange={handleInputChange}
				/>

				{buttonText ? (
					<button onClick={handleSubmit}>{buttonText}</button>
				) : undefined}
			</div>
		</form>
	)
}
