import { useEffect } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";
import Form from "./Page/Form";
import { useState } from "react";

function App() {
  const { tasks, readTasks, createTask } = useTodo();

  useEffect(() => {
    readTasks();
  }, [readTasks]);

  const initialValue = {
    task: "",
    pending: true,
  };
  const [newFormTask, setNewFormTask] = useState(initialValue);

  const actionOnChange = (event) => {
    setNewFormTask({
      ...newFormTask,
      [event.target.id]: event.target.value,
    });
  };

  const addNewTask = (event) => {
    event.preventDefault();
    let newTask = {
      ...newFormTask,
    };
    console.log(newTask, "inApp");
    createTask(newTask);
  };

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
      <Form actionOnChange={actionOnChange} addNewTask={addNewTask} />
      <pre>{JSON.stringify(newFormTask, null, 2)}</pre>
    </div>
  );
}

export default App;
