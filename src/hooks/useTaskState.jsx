import { useState, useEffect, useContext } from 'react'
import { AllLists } from '../context'
import { tasksStatus } from '../helpers/tasksStatus'

export const useTaskState = (subtasks) => {
	const { lists, dispatch } = useContext(AllLists)

	const [tasksProgress, setTasksProgress] = useState([])
	const [tasksCompleted, setTasksComplete] = useState([])

	useEffect(() => {
		setTasksProgress(tasksStatus(subtasks, 'progress'))
		setTasksComplete(tasksStatus(subtasks, 'completed'))
	}, [lists])

	return {
		tasksProgress,
		tasksCompleted,
	}
}
