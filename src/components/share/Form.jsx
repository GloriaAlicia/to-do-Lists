import { useState, useContext } from 'react'
import '../../App.css'

import { AllLists } from '../../App';
import {createList, createTask } from '../../helpers /create';


export const Form = ({ submit, placeholder, id, labelText, textValue}) => {

    const [state, setStateData] = useState([]);
    const [lists, setLists, actualList, setActualList, task, setTask] = useContext(AllLists);

    const handleInputChange = ({ target }) => setStateData(target.value);

    const handleSubmit = e => {

        e.preventDefault()
        submit(state, actualList)
        setStateData('');

    }

    return (
        <form action="#" onSubmit={handleSubmit}>

            <div className="flex">

                <label htmlFor={id} > { labelText } </label>

                <input
                    type="text"
                    name="task"
                    className="inputData"
                    placeholder={placeholder}
                    autoComplete="off"
                    value={ textValue ?? state }
                    id={id}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    )
}