import { useEffect } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";
import Form from "./Page/Form";

function App() {
  const { tasks, readTasks } = useTodo();

  useEffect(() => {
    readTasks();
  }, [readTasks]);

  return (
    <div className="App">
      <h1>Aip Am An Aip Api App</h1>

      <ul className="tasks">
        {" "}
        These are my pending tasks:
        {tasks.map(({ task }) => (
          <li key={task}>
            <input type="checkbox" />
            {task}
            <button className="tasks__edit">Edit task</button>
            <button className="tasks__delete">Delete task</button>
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}

export default App;
