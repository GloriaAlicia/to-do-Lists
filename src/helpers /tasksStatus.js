export const tasksStatus = (tasks, status) => {
	let tasksStatus

	if (tasks) {
		tasksStatus = tasks.filter((task) => task.complete == status)
	} else {
		console.log('set a task')
		//lanzar un error
	}

	return tasksStatus
}
