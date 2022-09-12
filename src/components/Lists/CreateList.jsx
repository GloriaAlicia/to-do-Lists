import { useContext } from 'react'
import { Form } from '../Share/Form'
import { AllLists } from '../../context/index.jsx'
import { createList, createTask } from '../../helpers/create.js'

export const CreateList = () => {
	const { lists, dispatch } = useContext(AllLists)

	const handleSubmit = (state) => {
		dispatch({
			type: 'addList',
			payload: createList(state),
		})
	}

	return (
		<section>
			<Form
				submit={handleSubmit}
				placeholder={'create new list'}
				labelText={'+ '}
			/>
		</section>
	)
}
