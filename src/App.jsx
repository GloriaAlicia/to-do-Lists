import { useState, createContext } from 'react'

import './App.css'
import { SideBar } from './components/SideBar'
import { TodoList } from './components/TodoList'

export const AllLists = createContext();

function App() {
  const [lists, setLists] = useState([]);
  const [actualList, setActualList] = useState(0);
  const [task, setTask] = useState({});

  return (
    <AllLists.Provider value={[lists, setLists, actualList, setActualList, task, setTask]}>

      <h1>Stuffs for do</h1>
      <main className='flex container'>
        <SideBar />
        <TodoList />
      </main>

    </AllLists.Provider>
  )
}

export default App