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
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
      <ul className="tasks">
        {tasks.map(({ task }) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <Form />
    </div>
  );
}

export default App;
