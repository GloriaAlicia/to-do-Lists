import { useFindList } from "../../../hooks/useFindList"
import { useTaskState } from "../../../hooks/useTaskState"
import { At } from '../../../components/index.js'

export const Header = () => {
	const actualList = useFindList()
	const { tasksProgress } = useTaskState(actualList?.tasks)
	
	return (
		<At.FlexContainer>
			<h3> {actualList?.name} </h3>
			<p> {tasksProgress?.length ?? 0} remaining tasks </p>
		</At.FlexContainer>
	)
}