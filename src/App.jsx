import { Home } from './pages/Home/index'
import { Board } from './pages/board'
import { useFindList } from './hooks/useFindList'
import { TitleDecorative } from './components/Atoms/TitleDecorative'

function App() {
	const actualList = useFindList()
	
	return (
		<main className='flex container'>
			<TitleDecorative text={'Manage your tasks'} />
			{actualList ? <Board/> : <Home/>}
		</main>
	)
}

export default App
