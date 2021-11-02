const Task = ({ task }) => {
  return (
    <li key={task}>
      <input type="checkbox" />
      {task}
      <button className="tasks__edit">Edit task</button>
      <button className="tasks__delete">Delete task</button>
    </li>
  );
};

export default Task;
