import React from 'react';
import { useEffect, useState, useContext } from "react";

import { completeTask, deleteTask } from '../../helpers /create';
import { AllLists } from '../../App';

import "./styles.css"
import TaskEdit from './TaskEdit';


const Task = ({ name, complete, id, searchId, actualTask }) => {

    const [lists, setLists, actualList, setActualList, task, setTask] = useContext(AllLists);


    const [edit, setEdit] = useState(false)

    const handleChange = e => {
        const listsEdit = completeTask(actualList, e.target.checked, id)
        setLists([...lists])
        console.log(lists)
    }

    const handleDelete = () => {

        const removeItem = deleteTask( lists, actualList, task?.id)
        console.log(removeItem);
        setLists(removeItem)

    }

    return edit ? (

            <TaskEdit
                searchId={searchId}
                setEdit={setEdit}
            />
            
        ) : (
            <div onClick={() => setTask(actualTask)}>
                <input
                    type="checkbox"
                    id={id}
                    className='hide'
                    defaultChecked={ complete ?? checked }
                    onChange={handleChange}
                />
    
    
                <label htmlFor={ id } >
                    <span
                        className={`custom-checkbox ${complete && 'completed'}`}>
                    </span>
    
                    {name}
    
                </label>
    
                <button onClick={ () => setEdit(true) }  > 
    
                    edit
    
                </button>
    
                <button onClick={ handleDelete } > 
    
                    delete
    
                </button>
            </div>
        );
    

}

export default Task;