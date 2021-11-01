import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  readTasksThunk,
  createTaskThunk,
  updateTaskThunk,
  deleteTaskThunk,
} from "../redux/thunks/index";

const useTodo = () => {
  const tasks = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  const readTasks = useCallback(() => {
    dispatch(readTasksThunk());
  }, [dispatch]);

  const createTask = useCallback(() => {
    dispatch(createTaskThunk());
  }, [dispatch]);

  const updateTask = useCallback(() => {
    dispatch(updateTaskThunk());
  }, [dispatch]);

  const deleteTask = useCallback(() => {
    dispatch(deleteTaskThunk());
  }, [dispatch]);

  return {
    tasks,
    readTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTodo;
