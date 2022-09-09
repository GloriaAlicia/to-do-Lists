import { useState, useContext, useEffect } from 'react'
import { AllLists } from '../../context'
import './styles.css'
import { StatusTasks } from './StatusTasks'
import { tasksStatus } from '../../helpers /tasksStatus'
import { CreateTask } from './CreateTask'

export const TodoList = () => {
	const { lists, setLists, actualList, setActualList, task, setTask } =
		useContext(AllLists)

	const [tasksProgress, setTasksProgress] = useState([])
	const [tasksCompleted, setTasksComplete] = useState([])

	const updateActualList = () => {
		return lists.map((list) =>
			list.id === actualList.id ? setActualList(list) : list,
		)
	}

	useEffect(() => {
		const tasks = actualList?.tasks
		setTasksProgress(tasksStatus(tasks, 'progress'))
		setTasksComplete(tasksStatus(tasks, 'completed'))
		updateActualList()
	}, [lists, actualList])

	return (
		<section className='containerList'>
			<article>
				<div className='header'>
					<h3> {actualList.name} </h3>
					<p> {tasksProgress?.length ?? 0} remaining tasks </p>
					<CreateTask />
				</div>
			</article>

			<article className='containerTasks'>
				<StatusTasks tasks={tasksProgress} title={'In progress'} />
				<StatusTasks tasks={tasksCompleted} title={'Completed'} />
			</article>
		</section>
	)
}
