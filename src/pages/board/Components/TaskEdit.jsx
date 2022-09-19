import PropTypes from 'prop-types'
import { updateTask } from '../../../helpers/create'
import { Lay } from '../../../components'
import { useLists } from '../../../hooks/useLists'

export const TaskEdit = ({ searchId, setEdit, task }) => {
	const { dispatch } = useLists()

	const handleSubmit = (state) => {
		dispatch( updateTask(state, searchId) )
		setEdit(false)
	}

	return (
			<Lay.Form
				submit={handleSubmit}
				placeholder={'edit your task'}
				textValue={task}
				buttonText={'Update'}
			/>
	)
}
