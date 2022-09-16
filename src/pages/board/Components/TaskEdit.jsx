import PropTypes from 'prop-types'

import { updateTask } from '../../../helpers/create'
import { at, lay } from '../../../components'
import { useLists } from '../../../hooks/useLists'

export const TaskEdit = ({ searchId, setEdit, task }) => {
	const { dispatch } = useLists()

	const handleSubmit = (state) => {
		dispatch( updateTask(state, searchId) )
		setEdit(false)
	}

	return (
		<at.FlexContainer>
			<lay.Form
				submit={handleSubmit}
				placeholder={'edit your task'}
				labelText={''}
				textValue={task}
				buttonText={'Update'}
			/>
		</at.FlexContainer>
	)
}
