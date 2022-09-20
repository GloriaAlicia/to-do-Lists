import { useId } from 'react'
import { completeTask, deleteSubtask } from '../../../helpers/create'
import { At, Icon, Button } from '../../../components'
import { useLists } from '../../../hooks/useLists'
import styled from 'styled-components'

export const Container = styled(At.FlexContainer)`
	@media (max-width: 360px) {
	  width: ${({big}) => big ? '100%' : 'auto'};
    justify-content: ${({big}) => big ? 'end' : 'center'};
  }
`
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
				
			
			<Container big={task.length >= 18} >
				<Button.IconTooltip title={'edit'} handle={() => setEdit(true)} >
					<Icon.EditIcon/>
				</Button.IconTooltip>
				
				<Button.IconTooltip
				title={'delete'}
				handle={() => dispatch(deleteSubtask(id))} >
          <Icon.Trash />
				</Button.IconTooltip>
			</Container>
			
	</>
	)
}
