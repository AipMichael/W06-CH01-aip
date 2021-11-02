import { useEffect } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";
import Form from "./Page/Form";
import { useState } from "react";
import Task from "./Page/task/task";

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
    createTask(newTask);
    // falta vaciar el valor
  };

  return (
    <div className="App">
      <h1>Aip Am An Aip Api App</h1>

      <ul className="tasks">
        {" "}
        These are my pending tasks:
        {tasks.map(({ task }) => (
          <Task task={task} />
        ))}
      </ul>
      <Form actionOnChange={actionOnChange} addNewTask={addNewTask} />
      <pre>{JSON.stringify(newFormTask, null, 2)}</pre>
    </div>
  );
}

export default App;
