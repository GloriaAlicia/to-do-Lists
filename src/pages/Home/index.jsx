import { useEffect } from 'react'
import { CreateList } from './Components/CreateList'
import { Lists } from './Components/Lists'
import { useLists } from '../../hooks/useLists'
import { TitleDecorative } from '../../components/Atoms/TitleDecorative'

export const Home = () => {
	const { lists } = useLists()
	
	useEffect(() => {
		localStorage.setItem('Notes', JSON.stringify(lists))
	}, [lists])

	return (
		<section>
			<TitleDecorative text={'Manage your tasks'} />
			<CreateList />
			<Lists/>
		</section>
	)
}
