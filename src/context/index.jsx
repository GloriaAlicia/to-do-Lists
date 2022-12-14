import { createContext, useReducer } from 'react'
import { reducer } from '../reducer/reducer'

export const AllLists = createContext(null)

const init = () => {
	return JSON.parse(localStorage.getItem('Notes')) || []
}

export function Provider({ children }) {

	const [lists, dispatch] = useReducer(reducer, [], init)
	const values = {
		lists,
		dispatch,
	}
	return <AllLists.Provider value={values}>{children}</AllLists.Provider>
}
