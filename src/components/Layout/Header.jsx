import { useFindList } from "../../hooks/useFindList"
import { useTaskState } from "../../hooks/useTaskState"
import { At } from '../../components/index'
import styled from 'styled-components'

const Container = styled(At.FlexContainer)`
	flex-direction: column;
	max-width: 800px;
`
const Text = styled.p`
	margin: 0px;
`
export const Header = () => {
	const actualList = useFindList()
	const { tasksProgress } = useTaskState(actualList?.tasks)
	
	return (
		<Container>
			<At.Title>{actualList?.name}</At.Title>
			<Text> {tasksProgress?.length ?? 0} remaining tasks </Text>
		</Container>
	)
}