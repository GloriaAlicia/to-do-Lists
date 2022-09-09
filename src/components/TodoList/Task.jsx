import { useEffect, useState, useContext } from 'react'

import { completeTask, deleteTask } from '../../helpers /create'
import { AllLists } from '../../context'

import './styles.css'
import { TaskEdit } from './TaskEdit'

export const Task = ({ name, complete, id, searchId, actualTask }) => {
	const { lists, setLists, actualList, setActualList, task, setTask } =
		useContext(AllLists)

	const [edit, setEdit] = useState(false)

	const handleChange = (e) => {
		let change = e.target.checked ? 'completed' : 'progress'
		const listsEdit = completeTask(actualList, change, id)
		setLists([...lists])
	}

	const handleDelete = () => {
		setLists(deleteTask(lists, actualList, id))
	}

	return edit ? (
		<TaskEdit searchId={searchId} setEdit={setEdit} />
	) : (
		<div onClick={() => setTask(actualTask)}>
			<input
				type='checkbox'
				id={id}
				className='hide'
				defaultChecked={complete === 'completed' ?? checked}
				onChange={handleChange}
			/>

			<label htmlFor={id}>
				<span
					className={`custom-checkbox ${
						complete === 'completed' && 'completed'
					}`}
				></span>

				{name}
			</label>

			<button onClick={() => setEdit(true)}>edit</button>

			<button onClick={handleDelete}>delete</button>
		</div>
	)
}
