import useTodo from "../../hooks/useTodo";

const Task = ({ task }) => {
  const { updateTask } = useTodo();

  const editOnClick = (event) => {
    updateTask(task);
  };

  return (
    <li>
      <input type="checkbox" />
      {task}
      <button className="tasks__edit" onClick={editOnClick}>
        Edit task
      </button>
      <button className="tasks__delete">Delete task</button>
    </li>
  );
};

export default Task;
