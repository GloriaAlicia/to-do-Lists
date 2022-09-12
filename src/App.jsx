import { Home } from './pages/Home/index'
import { Board } from './pages/board'
import { Provider } from './context/index.jsx'

import './App.css'

function App() {
	return (
		<Provider>
			<h1>Stuffs for do</h1>
			<main className='flex container'>
				<Home />
				<Board />
			</main>
		</Provider>
	)
}

export default App
