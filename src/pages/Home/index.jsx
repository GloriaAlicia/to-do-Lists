import { useContext, useEffect } from 'react'
import { CreateList } from '../../components/Lists/CreateList'
import { Lists } from '../../components/Lists/Lists'
import { AllLists } from '../../context'

export const Home = () => {
	const { lists, dispatch } = useContext(AllLists)
	console.log(lists)

	useEffect(() => {
		console.log(lists)
		localStorage.setItem('Notes', JSON.stringify(lists))
	}, [lists])

	return (
		<section>
			<Lists />
			<CreateList />
		</section>
	)
}
