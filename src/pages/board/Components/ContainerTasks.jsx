import { useFindList } from "../../../hooks/useFindList"
import { useTaskState } from "../../../hooks/useTaskState"
import { RenderTasks } from './RenderTasks'

export const ContainerTasks = () => {
	const actualList = useFindList()
	const { tasksProgress, tasksCompleted } = useTaskState(actualList?.tasks)

	return (
    	<section className='containerTasks'>
				<RenderTasks tasks={tasksProgress} title={'In progress'} />
				<RenderTasks tasks={tasksCompleted} title={'Completed'} />
      </section>
	)
}