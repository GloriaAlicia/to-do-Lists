import styled from 'styled-components'
import { increaseProgress } from '../../helpers/increaseProgress'
import { tasksStatus } from '../../helpers/tasksStatus'
import { colors, space } from '../../styles/var'

const ContainerWrap = styled.div`
  background-color: rgba(20, 20, 20, 0.26);
	border-radius: ${space.radius};
	height: 1.5vh;
	width: 100%;
	margin: 0.5rem 0rem;
`
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0.5rem 0rem;
`
const Progress = styled.div`
	border-radius: ${space.radius};
	width: 0%;
	height: 100%;
	background-color: ${colors.primary};
`
const Text = styled.p`
	margin: 0 0 0 .4rem;
`

export const ProgressBar = ({ list }) => {
	const complete = tasksStatus(list.tasks, 'completed')
	const width = increaseProgress(list.tasks.length, complete.length)
	
	return list.tasks.length >= 1 ? (
		<>
			<ContainerWrap>
				<Progress style={{ width: width + "%" }} />
			</ContainerWrap>
			
			<Container>
				<Text> Progress </Text>
				<Text>{`${complete.length} / ${list.tasks.length}`}</Text>
			</Container>
		</>
	) : <p>List Empty</p>
}