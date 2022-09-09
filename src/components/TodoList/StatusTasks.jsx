import { Task } from './Task'

export const StatusTasks = ({ tasks, title }) => {
	return (
		<article>
			{tasks?.length > 0 ? <p> {title} </p> : undefined}

			{tasks?.map((list) => (
				<div key={list.id}>
					<Task
						name={list.task}
						complete={list.complete}
						id={list.id}
						searchId={list.id}
						actualTask={list}
					/>
				</div>
			))}
		</article>
	)
}
