import { useContext } from 'react'
import { Form } from '../share/Form'

import { AllLists } from '../../App';
import { createList } from '../../helpers /create';

export const SideBar = () => {

    const [lists, setLists, actualList, setActualList, task, setTask] = useContext(AllLists);

    const handleSubmit = (state) => {

        const newData = createList(state)
        setLists(data => {
            return ([
                ...data, {
                    ...newData
                }
            ])
        })
    }

    return(
        <section>
            <h2>My lists</h2>
        
            <ol>
                {   
                    lists.map((list, i) => (
                        <li key={ i } onClick={ () => setActualList(list) } >
                            {list.name} 
                        </li>
                    ))
                }
            </ol>

            <Form 
                submit={handleSubmit}
                placeholder={'create new list'}
                id={'list'}
                labelText={'+ '}
            />

        </section>
    )
}