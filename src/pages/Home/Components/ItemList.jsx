import { At, Lay } from '../../../components/index.js'

export const ItemList = ({ list, title }) => {
	return (
		<>
			<At.Title> {title} </At.Title>
			<Lay.ProgressBar list={list} />
			<Lay.ContainerButtons
				id={list.id}
				favourite={list.favourite}
			/>
		</>
	)
}
