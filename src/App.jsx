import { useState, useContext } from 'react'

import './App.css'
import { Home } from './components/Home'
import { TodoList } from './components/TodoList'

import { Provider } from './context/index.jsx'

function App() {
	return (
		<Provider>
			<h1>Stuffs for do</h1>
			<main className='flex container'>
				<Home />
				<TodoList />
			</main>
		</Provider>
	)
}

export default App
