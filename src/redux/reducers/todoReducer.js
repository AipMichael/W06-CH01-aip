import actionTypes from "../actions/actionType";

const todoReducer = (tasks, action) => {
  let newTasks; // las funciones las aplico a newGentlemen: modifico gentlemen y lo asigno a newGentlmen

  switch (action.type) {
    case actionTypes.createTask:
      newTasks = [...action.tasks];
      break;
    case actionTypes.readTasks:
      newTasks = [...tasks, action.task];
      break;
    case actionTypes.updateTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;
    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;
    default:
      newTasks = tasks;
      break;
  }

  return newTasks;
};

export default todoReducer;
