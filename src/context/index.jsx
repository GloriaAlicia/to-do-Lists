import { createContext, useState } from 'react'

export const AllLists = createContext(null)

export function Provider({ children }) {
	const [lists, setLists] = useState([])
	const [actualList, setActualList] = useState([])
	const [task, setTask] = useState({})

	const values = {
		lists,
		setLists,
		actualList,
		setActualList,
		task,
		setTask,
	}

	return <AllLists.Provider value={values}>{children}</AllLists.Provider>
}
