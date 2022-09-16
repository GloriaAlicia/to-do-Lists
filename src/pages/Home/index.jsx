import { useContext, useEffect } from 'react'
import { CreateList } from './Components/CreateList'
import { AllLists } from '../../context/index.jsx'
import { Lists } from './Components/Lists'

export const Home = () => {
	const { lists, dispatch } = useContext(AllLists)
	
	useEffect(() => {
		localStorage.setItem('Notes', JSON.stringify(lists))
	}, [lists])

	return (
		<section>
			<h2>Manage your lists</h2>
			<CreateList />
			<Lists/>
		</section>
	)
}
