import { useContext } from 'react'
import { AllLists } from '../context/index.jsx'

export const useFindList = () => {
	const { lists } = useContext(AllLists)

	const actualList = lists.find((list) => list.selected === true)

	return actualList
}
