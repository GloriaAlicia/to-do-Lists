import { useEffect, useContext } from 'react'
import { AllLists } from '../../App';
import { createTask, editTask } from '../../helpers /create';


import { Form } from "../share/Form"
import "./styles.css"
import Task from './Task';

export const TodoList = () => {
    const [lists, setLists, actualList, setActualList, task, setTask] = useContext(AllLists);

    const handleSubmit = (state, actualList) => {
      
        const newData = createTask(state, actualList)
        setLists(data => {
            return([
                ...data
            ])
        })
    }

    return (
        <section className='containerList'>
            <article >
                <h2>Manage your tasks</h2>

                <div className="header">
                    <h3> {actualList.name} </h3>
                    <p> {actualList?.tasks?.length} tasks </p>
                </div>

                <Form 
                    submit={handleSubmit} 
                    placeholder={'create new task'}
                    id={'task'}
                    labelText={'task '}
                />
            </article>



            <article className="containerTasks">

                {
                    actualList?.tasks?.map(list => (
                        <Task
                            name={list.task}
                            complete={list.complete}
                            key={list.id}
                            id={list.id}
                            searchId={ list.id }
                            actualTask={list}
                        />
                    ))
                }

            </article>
        </section>
    )
}