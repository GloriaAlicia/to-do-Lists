import { useContext } from 'react'
import { AllLists } from '../../context/index.jsx'

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
				{lists.map((list, i) => (
					<li key={i} onClick={() => selectedList(list.id)}>
						{list.name}
					</li>
				))}
			</ol>
		</section>
	)
}
