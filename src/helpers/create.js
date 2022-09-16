import { v4 as uuidv4 } from 'uuid'

export const createList = (state) => ({
	type: 'addList',
  	payload: {
	   name: state,
	   id: uuidv4(),
	   selected: false,
	   tasks: [],
	}
})

export const pickList = (id) => ({
	type: 'selectedList',
	payload: id,
})

export const createTask = (state) => ({
	type: 'addSubtask',
	payload: {
		task: state,
		update: false,
		complete: 'progress',
		id: uuidv4(),
	}
})

export const completeTask = (state, id) => ({
	type: 'stateSubtask',
	payload: {
		id: id,
		complete: state,
	}
})

export const updateTask = (state, id) => ({
	type: 'updateSubtask',
	payload: {
		id: id,
		task: state,
	}
})

export const deleteTask = id => ({
	type: 'deleteSubtask',
	payload: id,
})