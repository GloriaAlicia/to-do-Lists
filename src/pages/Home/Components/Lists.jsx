import { useContext } from 'react'
import { AllLists } from '../../../context/index.jsx'
import { pickList } from '../../../helpers/create.js'

export const Lists = () => {
	const { lists, dispatch } = useContext(AllLists)

	return (
		<section>
			<h2>Manage your lists</h2>

			<ol>
				{lists.map((list) => (
					<li key={list.id} onClick={() => dispatch(pickList(list.id))}>
						{list.name}
					</li>
				))}
			</ol>
		</section>
	)
}
