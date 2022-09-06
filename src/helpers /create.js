export const createList = (state) => {
    
    return {
        name: state,
        id: Date.now(),
        tasks: [],
    }
}


export const createTask = ( state, list ) => {

    const newText = {   
        task: state,
        update: false,
        complete: false,
        id: Date.now(),
    }

    list.tasks?.splice(0, 0, newText)
}


export const completeTask = (list, state, id ) => {

    const edit = [...list.tasks]
    const item = edit.filter((item) => item.id === id);
    item[0].complete = state;
    return item

}


export const editTask = ( state, list, id ) => {

    const edit = [...list.tasks]
    const item = edit.filter((item) => item.id === id);
    item[0].task = state;
    return item

}


export const deleteTask = ( lists, actualList, itemId, ) => {

    let listEditComplete = [ ...lists ]

    const listEdit = [...actualList.tasks]

    const item = listEdit.findIndex(item => item.id === itemId);
    listEdit.splice(item, 1)

    // console.log(listEdit);

    const indexActualList = lists.findIndex((item) => item.id === actualList.id);
    // console.log(listEditComplete);
    // console.log(listEditComplete[indexActualList].tasks);

    listEditComplete[indexActualList].tasks = listEdit

    return listEditComplete
}
