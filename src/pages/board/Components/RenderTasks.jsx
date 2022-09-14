import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid'

export const RenderTasks = ({ tasks, title }) => {
	return (
		<article>
			{tasks?.length > 0 ? <p> {title} </p> : undefined}

			{tasks?.map((task) => (
				<div key={task.id}>
					<Task
						task={task.task}
						complete={task.complete}
						id={task.id}
					/>
				</div>
			))}
		</article>
	)
}
