import { useContext } from 'react'
import PropTypes from 'prop-types'

import { updateTask } from '../../../helpers/create'
import { AllLists } from '../../../context/index'

import './styles.css'
import { Form } from '../../../components/Form'

export const TaskEdit = ({ searchId, setEdit, task }) => {
	const { lists, dispatch } = useContext(AllLists)

	const handleSubmit = (state) => {
		dispatch(updateTask(state, searchId))
		setEdit(false)
	}

	return (
		<div className='flex'>
			<Form
				submit={handleSubmit}
				placeholder={'edit your task'}
				labelText={''}
				textValue={task}
				buttonText={'Update'}
			/>
		</div>
	)
}
