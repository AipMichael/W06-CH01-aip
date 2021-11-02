import Task from "./task";

describe("Given a Task component", () => {
  describe("When it receives a task", () => {
    test("Then it should render a list item with a key and showing the task name", () => {
      const task = getRandomTask();

      render(<Task task={task} />);
    });
  });
});
