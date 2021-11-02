import actionTypes from "../actions/actionTypes";

const todoReducer = (tasks = [], action) => {
  let newTasks;

  switch (action.type) {
    case actionTypes.createTask:
      newTasks = [...tasks, action.task];
      break;
    case actionTypes.readTasks:
      newTasks = [...action.tasks];
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
