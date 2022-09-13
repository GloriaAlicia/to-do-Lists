import { useContext } from 'react'
import { AllLists } from '../../context/index.jsx'
import { v4 as uuidv4 } from 'uuid'

export const Lists = () => {
	const { lists, dispatch } = useContext(AllLists)

	const selectedList = (id) => {
		dispatch({
			type: 'selectedList',
			payload: id,
		})
	}

	return (
		<section>
			<h2>Manage your lists</h2>

			<ol>
				{lists.map((list) => (
					<li key={uuidv4()} onClick={() => selectedList(list.id)}>
						{list.name}
					</li>
				))}
			</ol>
		</section>
	)
}
