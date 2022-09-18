import { Home } from './pages/Home/index'
import { Board } from './pages/board'
import { useFindList } from './hooks/useFindList'

function App() {
	const actualList = useFindList()
	
	return (
		<main>
			{actualList ? <Board/> : <Home/>}
		</main>
	)
}

export default App
