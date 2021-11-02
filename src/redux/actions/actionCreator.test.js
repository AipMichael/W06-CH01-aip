import { getRandomTask, getRandomTasks } from "../../mocks/factories/factories";
import actionTypes from "./actionTypes";
import actionCreator, {
  createTaskAction,
  readTasksAction,
  updateTaskAction,
  deleteTaskAction,
} from "./actionCreator";

describe("Given a read actionCreator", () => {
  describe("When it receives a list of tasks", () => {
    test("Then it should return a load type action with the tasks received", () => {
      const tasksList = getRandomTasks();
      const expectedAction = {
        type: actionTypes.readTasks,
        tasks: tasksList,
      };

      const resultedAction = readTasksAction(tasksList);

      expect(resultedAction).toEqual(expectedAction);
    });
  });
});

describe("Given a create actionCreator", () => {
  describe("When it receives a task", () => {
    test("Then it should return a create type action with the task received", () => {
      const aTask = getRandomTask();
      const expectedAction = {
        type: actionTypes.createTask,
        task: aTask,
      };

      const resultedAction = createTaskAction(aTask);

      expect(resultedAction).toEqual(expectedAction);
    });
  });
});

describe("Given an update actionCreator", () => {
  describe("When it receives a task", () => {
    test("Then it should return an update type action with the task received", () => {
      const aTask = getRandomTask();
      const expectedAction = {
        type: actionTypes.updateTask,
        task: aTask,
      };

      const resultedAction = updateTaskAction(aTask);

      expect(resultedAction).toEqual(expectedAction);
    });
  });
});

describe("Given a delete actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action with the task received", () => {
      const id = 1;
      const expectedAction = {
        type: actionTypes.deleteTask,
        id,
      };

      const resultedAction = deleteTaskAction(id);

      expect(resultedAction).toEqual(expectedAction);
    });
  });
});
