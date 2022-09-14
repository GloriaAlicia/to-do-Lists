import { useContext } from 'react'

import { Form } from '../../../components/Form'
import { createTask } from '../../../helpers/create'
import { AllLists } from '../../../context/index'

export const CreateTask = () => {
	
	const { dispatch } = useContext(AllLists)
	const handleSubmit = (state) => dispatch(createTask(state))

	return (
		<Form
			submit={handleSubmit}
			placeholder={'create new task'}
			labelText={'task'}
		/>
	)
}
