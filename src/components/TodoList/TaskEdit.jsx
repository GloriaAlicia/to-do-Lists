import React from 'react';
import { useEffect, useState, useContext } from "react";

import { editTask, } from '../../helpers /create';
import { AllLists } from '../../App';

import "./styles.css"
import { Form } from '../share/Form';


const TaskEdit = ({ searchId, setEdit }) => {

    const [lists, setLists, actualList, setActualList, task, setTask] = useContext(AllLists);

/*     const handleSubmit = () => {
        setEdit(false)
    } */

/*     useEffect(() => {
        set
    }, []); */

    const handleSubmit = ( state, actualList, idSearch = searchId) => {
        
        const listsEdit = editTask(state, actualList, idSearch)
        setLists([...lists])
        setEdit(false)
        console.log(lists)

    }


    return (
        <div className='flex'>
            <Form
                submit={ handleSubmit }
                placeholder={'edit your task'}
                id={'editing'}
                labelText={''}
                buttonText={'update'}
                textValue={task.task}
            />
        </div>
    );

}

export default TaskEdit;