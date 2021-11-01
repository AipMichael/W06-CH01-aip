import { readTasksAction } from "../actions/actionCreator";

export const readTasksThunk = () => async (dispatch) => {
  const response = await fetch("https://todo-aip-api.herokuapp.com/list/");

  const tasks = await response.json();
  dispatch(readTasksAction(tasks));
};

export const createTaskThunk = () => async (dispatch) => {
  /*   const response = await fetch("https://todo-aip-api.herokuapp.com/list/");
  const tasks = await response.json();

  dispatch(createTaskAction(tasks)); */
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
