import { useEffect, useContext } from 'react'

import { Form } from '../share/Form'
import { createTask } from '../../helpers /create'
import { AllLists } from '../../context'

export const CreateTask = () => {
	const { lists, setLists, actualList, setActualList, setTask, task } =
		useContext(AllLists)

	const handleSubmit = (state, actualList, lists) => {
		const newListsUpdate = createTask(state, actualList.id, lists)
		setLists([...newListsUpdate])
	}

	return (
		<Form
			submit={handleSubmit}
			placeholder={'create new task'}
			id={'task'}
			labelText={'task'}
		/>
	)
}
