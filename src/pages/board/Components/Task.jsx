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
		<>
			
			<At.FlexContainer>
				<At.InputCheck
					id={constantId}
					defaultChecked={state === 'completed' ?? checked}
					onChange={ handleChange }
				/>
			
				<At.LabelText htmlFor={constantId} check={state === 'completed'}>
					{ task }
				</At.LabelText>
			</At.FlexContainer>
				
			
			<At.FlexContainer>
				<Button.IconTooltip title={'edit'} handle={() => setEdit(true)} >
					<Icon.EditIcon/>
				</Button.IconTooltip>
				
				<Button.IconTooltip
				title={'delete'}
				handle={() => dispatch(deleteSubtask(id))} >
          <Icon.Trash />
				</Button.IconTooltip>
			</At.FlexContainer>
			
	</>
	)
}
