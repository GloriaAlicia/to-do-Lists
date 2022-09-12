export const createList = (state) => {
	return {
		name: state,
		id: Date.now(),
		selected: false,
		tasks: [],
	}
}

export const createTask = (state) => {
	return {
		task: state,
		update: false,
		complete: 'progress',
		id: Date.now(),
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