import { Home } from './pages/Home/index'
import { Board } from './pages/board'
import { useFindList } from './hooks/useFindList'

function App() {
	const actualList = useFindList()
	
	return (
		<main className='flex container'>
			<h1> Dark Mode </h1>
			{actualList ? <Board/> : <Home/>}
		</main>
	)
}

export default App
