import { useState, useContext } from 'react'
import { AllLists } from '../../../context/index'

import { TaskEdit } from './TaskEdit'
import { Checkbox } from '../Components/TaskCheck'
import './styles.css'

export const Task = ({ task, complete, id }) => {
	const { lists, dispatch } = useContext(AllLists)
	const [edit, setEdit] = useState(false)

	const handleDelete = (id) => {
		dispatch({
			type: 'deleteSubtask',
			payload: id,
		})
	}

	return edit ? (
		<TaskEdit searchId={id} setEdit={setEdit} task={task} />
	) : (
		<div>
			<Checkbox id={id} state={complete} task={task} />

			<button onClick={() => setEdit(true)}>edit</button>
			<button onClick={() => handleDelete(id)}>delete</button>
		</div>
	)
}
