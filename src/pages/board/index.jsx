import { CreateTask } from './Components/CreateTask'
import { pickList } from '../../helpers/create'
import { useLists } from '../../hooks/useLists'
import { At, Button } from '../../components/index.js'
import { ContainerTasks } from './Components/ContainerTasks'
import { Header } from './Components/Header'
import styled from 'styled-components'

export const Container = styled(At.FlexContainer)`
  width: 90vw;
	margin: 0 auto;
	flex-direction: column;
`

export const Board = () => {
	const { dispatch } = useLists()
	
	return (
		<Container>
			<Header />
			
			<At.FlexContainer>
					<Button.Primary onClick={() => dispatch(pickList(10))} >
						Home
					</Button.Primary>
					<CreateTask />
			</At.FlexContainer>
			
			<ContainerTasks />
		</Container>
	)
}
