import { createTaskAction, readTasksAction } from "../actions/actionCreator";

const readTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasks = await response.json();

  dispatch(readTasksAction(tasks));
};

const createTaskThunk = async (dispatch) => {
  /*   const response = await fetch("https://todo-aip-api.herokuapp.com/list");
  const tasks = await response.json();

  dispatch(createTaskAction(tasks)); */
};

export default readTasksThunk;
