import { useContext, useId } from 'react'

import { AllLists } from '../../../context'
import { completeTask } from '../../../helpers/create'

export const Checkbox = ({ id, task, state }) => {
	const { lists, dispatch } = useContext(AllLists)

	const constantId = useId()

	const handleChange = (e) => {
		let change = e.target.checked ? 'completed' : 'progress'
		dispatch(completeTask(change, id))
	}

	return (
		<>
			<input
				type='checkbox'
				id={constantId}
				className='hide'
				defaultChecked={state === 'completed' ?? checked}
				onChange={handleChange}
			/>

			<label htmlFor={constantId}>
				<span
					className={`custom-checkbox ${
						state === 'completed' && 'completed'
					}`}
				></span>

				{task}
			</label>
		</>
	)
}
