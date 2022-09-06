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

    const tasksInProgress = actualList?.tasks?.filter(task => task.complete === false)
    const tasksCompleted = actualList?.tasks?.filter(task => task.complete === true )


    return (
        <section className='containerList'>
            <article >
                <h2>Manage your tasks</h2>

                <div className="header">
                    <h3> {actualList.name} </h3>
                    <p> {tasksInProgress?.length} remaining tasks </p>
                </div>

                <Form 
                    submit={handleSubmit} 
                    placeholder={'create new task'}
                    id={'task'}
                    labelText={'task '}
                />
            </article>



            <article className="containerTasks">

                { tasksInProgress?.length > 0 ? <p> In progress </p> : undefined}

                {
                    tasksInProgress?.map(list => (
                        <div key={list.id}>
                            <Task
                            name={list.task}
                            complete={list.complete}
                            id={list.id}
                            searchId={ list.id }
                            actualTask={list}
                            />
                        </div>
                    ))
                }

                { tasksCompleted?.length > 0 ? <p> Completed </p> : undefined}

                {
                    tasksCompleted?.map(list => (
                        <div key={list.id}>
                            <Task
                            name={list.task}
                            complete={list.complete}
                            id={list.id}
                            searchId={ list.id }
                            actualTask={list}
                            />
                        </div>
                    ))
                }

            </article>
        </section>
    )
}