export const createList = (state) => {
	return {
		name: state,
		id: Date.now(),
		tasks: [],
	}
}

export const createTask = (state, id, lists) => {
	const newTask = {
		task: state,
		update: false,
		complete: 'progress',
		id: Date.now(),
	}

	return lists.map((list) =>
		list.id === id ? { ...list, tasks: [...list.tasks, newTask] } : list,
	)
}

export const completeTask = (list, state, id) => {
	const edit = [...list.tasks]
	const item = edit.filter((item) => item.id === id)
	item[0].complete = state
	return item
}

export const editTask = (state, list, id) => {
	const edit = [...list.tasks]
	const item = edit.filter((item) => item.id === id)
	item[0].task = state
	return item
}

export const deleteTask = (lists, actualList, itemId) => {
	let listEditComplete = [...lists]

	const listEdit = [...actualList.tasks]

	const item = listEdit.findIndex((item) => item.id === itemId)
	listEdit.splice(item, 1)

	const indexActualList = lists.findIndex((item) => item.id === actualList.id)
	// buscando indice de lista
	listEditComplete[indexActualList].tasks = listEdit

	return listEditComplete
}
