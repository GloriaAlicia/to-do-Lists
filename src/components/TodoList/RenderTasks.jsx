import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid'

export const RenderTasks = ({ tasks, title }) => {
	return (
		<article>
			{tasks?.length > 0 ? <p> {title} </p> : undefined}

			{tasks?.map((list) => (
				<div key={uuidv4()}>
					<Task
						task={list.task}
						complete={list.complete}
						id={list.id}
					/>
				</div>
			))}
		</article>
	)
}
