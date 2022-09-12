import './styles.css'
import { RenderTasks } from './RenderTasks'
import { CreateTask } from './CreateTask'
import { useFindList } from '../../hooks/useFindList'
import { useTaskState } from '../../hooks/useTaskState'

export const TodoList = () => {
	const actualList = useFindList()
	const { tasksProgress, tasksCompleted } = useTaskState(actualList?.tasks)

	return (
		<section className='containerList'>
			<div className='header'>
				<h3> {actualList?.name} </h3>
				<p> {tasksProgress?.length ?? 0} remaining tasks </p>
				<CreateTask />
			</div>

			<section className='containerTasks'>
				<RenderTasks tasks={tasksProgress} title={'In progress'} />
				<RenderTasks tasks={tasksCompleted} title={'Completed'} />
			</section>
		</section>
	)
}
