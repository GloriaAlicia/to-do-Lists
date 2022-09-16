import { pickList } from '../../helpers/create'
import { useLists } from '../../hooks/useLists'
import * as at from '../Atoms'
import * as button from '../Buttons'
import * as lay from '../Layout'

export const ItemList = ({list, title, id }) => {
	const { dispatch } = useLists()
	return (
		<>
			<at.Title> {title} </at.Title>
			
			<lay.ProgressBar list={list} />
			<button.Primary onClick={() => dispatch(pickList(id))}>
				Add subtasks
			</button.Primary>
		</>
	)
}
