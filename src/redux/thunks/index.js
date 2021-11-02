import {
  createTaskAction,
  readTasksAction,
  updateTaskAction,
} from "../actions/actionCreator";

export const readTasksThunk = () => async (dispatch) => {
  const response = await fetch("https://todo-aip-api.herokuapp.com/list/");

  const tasks = await response.json();
  dispatch(readTasksAction(tasks));
};

export const createTaskThunk = (task) => {
  return async (dispatch) => {
    console.log(task, "HOLA MARIO, estoy enThunks1");
    const response = await fetch("https://todo-aip-api.herokuapp.com/list", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTasks = await response.json();
    console.log(newTasks, "HOLA MARIO, estoy enThunks2");
    dispatch(createTaskAction(newTasks));
  };
};

export const deleteTaskThunk = () => async (dispatch) => {
  /*   const response = await fetch("https://todo-aip-api.herokuapp.com/list/");
  const tasks = await response.json();

  dispatch(createTaskAction(tasks)); */
};

export const updateTaskThunk = (task) => async (dispatch) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://todo-aip-api.herokuapp.com/list/${task.id}`,
      {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newTasks = await response.json();

    dispatch(updateTaskAction(newTasks));
  };
};
