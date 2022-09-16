import { lay } from '../../../components'
import { createList } from '../../../helpers/create.js'
import { useLists } from '../../../hooks/useLists'

export const CreateList = () => {
	const { dispatch } = useLists()

	const handleSubmit = (state) => dispatch(createList(state))

	return (
		<section>
			<lay.Form
				submit={handleSubmit}
				placeholder={'create new list'}
				labelText={'+ '}
			/>
		</section>
	)
}
