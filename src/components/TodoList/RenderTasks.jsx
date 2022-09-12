import { Task } from './Task'

export const RenderTasks = ({ tasks, title }) => {
	return (
		<article>
			{tasks?.length > 0 ? <p> {title} </p> : undefined}

			{tasks?.map((list) => (
				<div key={list.id}>
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
