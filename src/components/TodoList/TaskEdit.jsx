import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'

import { editTask } from '../../helpers /create'
import { AllLists } from '../../context'

import './styles.css'
import { Form } from '../share/Form'

export const TaskEdit = ({ searchId, setEdit }) => {
	const { lists, setLists, actualList, setActualList, task, setTask } =
		useContext(AllLists)

	const handleSubmit = (state, actualList, Lists, idSearch = searchId) => {
		const listsEdit = editTask(state, actualList, idSearch)
		setLists([...lists])
		setEdit(false)
	}

	return (
		<div className='flex'>
			<Form
				submit={handleSubmit}
				placeholder={'edit your task'}
				id={'editing'}
				labelText={''}
				buttonText={'update'}
				textValue={task.task}
			/>
		</div>
	)
}
