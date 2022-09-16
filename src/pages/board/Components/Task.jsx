import { useId } from 'react'
import { deleteTask, completeTask } from '../../../helpers/create'
import { at, icon } from '../../../components'
import { useLists } from '../../../hooks/useLists'

export const Task = ({ id, task, state, setEdit }) => {
	const { dispatch } = useLists()
	const constantId = useId()

	const handleChange = ({ target }) => {
		let change = target.checked ? 'completed' : 'progress'
		dispatch(completeTask(change, id))
	}

	return (
		<at.FlexContainer>
			<at.InputCheck
				id={constantId}
				defaultChecked={state === 'completed' ?? checked}
				onChange={ handleChange }
			/>
			
			<at.LabelText htmlFor={constantId} check={state === 'completed'}>
				{ task }
			</at.LabelText>
				
			<button onClick={() => setEdit(true)}>
				<icon.EditIcon/>
				edit
			</button>
				
			<button onClick={ () => dispatch(deleteTask(id)) }>delete</button>
	</at.FlexContainer>
	)
}
