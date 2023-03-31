export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'addList':
      return [...state, action.payload];

    case 'deleteList':
      return state.filter((list) => list.id !== action.payload);

    case 'selectedList':
      return state.map((list) =>
        list.id === action.payload
          ? { ...list, selected: true }
          : { ...list, selected: false }
      );

    case 'favouriteList':
      return state.map((list) => {
        if (list.id === action.payload.id) {
          return { ...list, favourite: action.payload.favourite };
        } else {
          return list;
        }
      });

    case 'addSubtask':
      return state.map((list) =>
        list.selected === true
          ? { ...list, tasks: [...list.tasks, action.payload] }
          : list
      );

    case 'deleteSubtask':
      return state.map((list) => {
        if (list.selected === true) {
          const update = list.tasks.filter(
            (task) => task.id !== action.payload
          );
          return { ...list, tasks: [...update] };
        } else {
          return list;
        }
      });

    case 'stateSubtask':
      return state.map((list) => {
        if (list.selected === true) {
          const update = list.tasks.find(
            (task) => task.id === action.payload.id
          );
          update.complete = action.payload.complete;
          return { ...list, tasks: [...list.tasks] };
        } else {
          return list;
        }
      });

    case 'updateSubtask':
      return state.map((list) => {
        if (list.selected === true) {
          const update = list.tasks.find(
            (task) => task.id === action.payload.id
          );
          update.task = action.payload.task;
          return { ...list, tasks: [...list.tasks] };
        } else {
          return list;
        }
      });
    default:
      return state;
  }
};
