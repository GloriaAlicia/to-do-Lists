import { lay } from '../../../components/'
import { createTask } from '../../../helpers/create'
import { useLists } from '../../../hooks/useLists'

export const CreateTask = () => {
	
	const { dispatch } = useLists()
	const handleSubmit = (state) => dispatch(createTask(state))

	return (
		<lay.Form
			submit={handleSubmit}
			placeholder={'create new task'}
			labelText={'task'}
		/>
	)
}
