import { RenderTasks } from './Components/RenderTasks'
import { CreateTask } from './Components/CreateTask'
import { useFindList } from '../../hooks/useFindList'
import { useTaskState } from '../../hooks/useTaskState'
import { pickList } from '../../helpers/create'
import { useLists } from '../../hooks/useLists'

export const Board = () => {
	const { dispatch } = useLists()
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
			
			<button onClick={() => dispatch(pickList(10))}>Home</button>
		</section>
	)
}
