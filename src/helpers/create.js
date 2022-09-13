import { v4 as uuidv4 } from 'uuid'

export const createList = (state) => {
	return {
		name: state,
		id: uuidv4(),
		selected: false,
		tasks: [],
	}
}

export const createTask = (state) => {
	return {
		task: state,
		update: false,
		complete: 'progress',
		id: uuidv4(),
	}
}

export const completeTask = (state, id) => {
	return {
		id: id,
		complete: state,
	}
}

export const updateTask = (state, id) => {
	return {
		id: id,
		task: state,
	}
}