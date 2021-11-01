import { createTaskAction, readTasksAction } from "../actions/actionCreator";

export const readTasksThunk = () => async (dispatch) => {
  const response = await fetch("https://todo-aip-api.herokuapp.com/list/");

  const tasks = await response.json();
  dispatch(readTasksAction(tasks));
};

export const createTaskThunk = (task) => {
  debugger;
  return async (dispatch) => {
    console.log(task, "enThunks1");
    const response = await fetch("https://todo-aip-api.herokuapp.com/list", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTasks = await response.json();
    console.log(newTasks, "enThunks2");
    dispatch(createTaskAction(newTasks));
  };
};

export const deleteTaskThunk = () => async (dispatch) => {
  /*   const response = await fetch("https://todo-aip-api.herokuapp.com/list/");
  const tasks = await response.json();

  dispatch(createTaskAction(tasks)); */
};

export const updateTaskThunk = () => async (dispatch) => {
  /*   const response = await fetch("https://todo-aip-api.herokuapp.com/list/");
  const tasks = await response.json();

  dispatch(createTaskAction(tasks)); */
};
