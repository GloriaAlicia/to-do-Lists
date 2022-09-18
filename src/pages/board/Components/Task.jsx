import { useId } from 'react'
import { completeTask, deleteSubtask } from '../../../helpers/create'
import { At, Icon, Button } from '../../../components'
import { useLists } from '../../../hooks/useLists'

export const Task = ({ id, task, state, setEdit }) => {
	const { dispatch } = useLists()
	const constantId = useId()

	const handleChange = ({ target }) => {
		let change = target.checked ? 'completed' : 'progress'
		dispatch(completeTask(change, id))
	}

	return (
		<At.FlexContainer>
			<At.InputCheck
				id={constantId}
				defaultChecked={state === 'completed' ?? checked}
				onChange={ handleChange }
			/>
			
			<At.LabelText htmlFor={constantId} check={state === 'completed'}>
				{ task }
			</At.LabelText>
				
			<Button.Primary onClick={() => setEdit(true)}>
				<Icon.EditIcon/>
				edit
			</Button.Primary>
				
			<Button.Primary onClick={ () => dispatch(deleteSubtask(id)) }>delete</Button.Primary>
	</At.FlexContainer>
	)
}
