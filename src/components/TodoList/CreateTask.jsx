import { useContext } from 'react'

import { Form } from '../Share/Form'
import { createTask } from '../../helpers/create'
import { AllLists } from '../../context'

export const CreateTask = () => {
	const { lists, dispatch } = useContext(AllLists)

	const handleSubmit = (state) => {
		dispatch({
			type: 'addSubtask',
			payload: createTask(state),
		})
	}

	return (
		<Form
			submit={handleSubmit}
			placeholder={'create new task'}
			labelText={'task'}
		/>
	)
}
