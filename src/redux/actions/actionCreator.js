import actionTypes from "./actionTypes";

export const createTasksAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const readTasksAction = (tasks) => ({
  type: actionTypes.readTasks,
  tasks,
});

export const updateTaskAction = (task, id) => ({
  type: actionTypes.updateTask,
  task,
  id,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.readTask,
  id,
});
