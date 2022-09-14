import { useContext } from 'react'
import { Form } from '../../../components/Form'
import { AllLists } from '../../../context/index.jsx'
import { createList } from '../../../helpers/create.js'

export const CreateList = () => {
	const { lists, dispatch } = useContext(AllLists)

	const handleSubmit = (state) => dispatch(createList(state))

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
