import { useEffect } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";

function App() {
  const { tasks, readTasks } = useTodo();

  useEffect(() => {
    readTasks();
  }, [readTasks]);

  return (
    <div className="App">
      <h1>Aip Am An Aip Api App</h1>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

export default App;
