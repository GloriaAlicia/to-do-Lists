import * as at from '../Atoms'
import * as lay from '../Layout'

export const ItemList = ({ list, title }) => {
	return (
		<>
			<at.Title> {title} </at.Title>
			<lay.ProgressBar list={list} />
			<lay.ContainerButtons id={list.id} />
		</>
	)
}
