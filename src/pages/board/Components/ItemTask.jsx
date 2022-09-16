import { useState } from 'react'
import { TaskEdit } from './TaskEdit'
import { Task } from './Task'

export const ItemTask = ({ task, complete, id }) => {
	const [edit, setEdit] = useState(false)

	return edit ? (
		<TaskEdit searchId={id} setEdit={setEdit} task={task} />
	) : (
		<Task id={id} state={complete} task={task} setEdit={setEdit} />
	)
}
