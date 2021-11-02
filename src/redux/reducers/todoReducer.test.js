import { getRandomTasks } from "../../mocks/factories/factories";
import todoReducer from "./todoReducer";
import {
  createTaskAction,
  readTasksAction,
  updateTaskAction,
} from "../actions/actionCreator";

describe("Given a todoReducer", () => {
  describe("When it receives a list of tasks and a create action", () => {
    test("Then it should return a new task list with the received action", () => {
      const tasksList = getRandomTasks();
      const aTask = getRandomTasks();

      const newTodoList = todoReducer(tasksList, createTaskAction(aTask));

      expect(newTodoList).toContainEqual(aTask);
    });
  });

  describe("When it receives a list of tasks and a read action", () => {
    test("Then it should return a new task list with the received actions", () => {
      const tasksList = getRandomTasks();

      const newTodoList = todoReducer(tasksList, readTasksAction(tasksList));

      expect(newTodoList).toEqual(tasksList);
    });
  });

  describe("When it receives a tasklist, an action and a single task", () => {
    test("Then it should return a new task list with the modified task", () => {
      const tasksList = getRandomTasks();
      const modifiedTask = {
        ...tasksList[1],
        task: "I changed the task",
      };

      const newTodoList = todoReducer(
        tasksList,
        updateTaskAction(modifiedTask)
      );
      expect(newTodoList).toContainEqual(modifiedTask);
    });
  });
});
// missing toggle and delete
