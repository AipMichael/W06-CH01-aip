import actionTypes from "./actionTypes";

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const readTasksAction = (tasks) => ({
  type: actionTypes.readTasks,
  tasks,
});

export const updateTaskAction = (task) => ({
  type: actionTypes.updateTask,
  task,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});
