export const tasksStatus = (tasks, status) => {
	if (tasks) {
		const tasksStatus = tasks.filter((task) => task.complete == status)
		return tasksStatus
	} else {
		console.log('set a task')
		//lanzar un error
	}
}
