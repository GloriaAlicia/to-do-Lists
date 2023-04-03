import { v4 as uuidv4 } from 'uuid';

/************************ Lists ********************************** */

export const createList = (state) => ({
  type: 'addList',
  payload: {
    name: state.name,
    description: state.description,
    id: uuidv4(),
    selected: false,
    favourite: false,
    tasks: [],
  },
});

export const pickList = (id) => ({
  type: 'selectedList',
  payload: id,
});

export const deleteList = (id) => ({
  type: 'deleteList',
  payload: id,
});

export const favouriteList = (favourite, id) => ({
  type: 'favouriteList',
  payload: {
    id: id,
    favourite: favourite,
  },
});

/************************ Subtasks ********************************** */

export const createTask = (state) => ({
  type: 'addSubtask',
  payload: {
    task: state,
    update: false,
    complete: 'progress',
    id: uuidv4(),
  },
});

export const completeTask = (state, id) => ({
  type: 'stateSubtask',
  payload: {
    id: id,
    complete: state,
  },
});

export const updateTask = (state, id) => ({
  type: 'updateSubtask',
  payload: {
    id: id,
    task: state,
  },
});

export const deleteSubtask = (id) => ({
  type: 'deleteSubtask',
  payload: id,
});
