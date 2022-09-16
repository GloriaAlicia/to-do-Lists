import { ItemTask } from './ItemTask'

export const RenderTasks = ({ tasks, title }) => {
	return (
		<article>
			{tasks?.length > 0 ? <p> {title} </p> : undefined}

			{tasks?.map((task) => (
				<article key={task.id}>
					<ItemTask
						task={task.task}
						complete={task.complete}
						id={task.id}
					/>
				</article>
			))}
		</article>
	)
}
