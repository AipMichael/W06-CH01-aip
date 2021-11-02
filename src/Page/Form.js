/* import { useState } from "react";
import useTodo from "../hooks/useTodo"; */

const Form = ({ actionOnChange, addNewTask }) => {
  /*   const { createTask } = useTodo(); */
  /*   const initialValue = {
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
  }; */

  return (
    <>
      <form className="form" autoComplete="off" onSubmit={addNewTask}>
        <label htmlFor="task" className="form_request">
          Write new To Do
        </label>
        <input
          type="text"
          id="task"
          placeholder="E.g.: Fix my bed"
          required={false}
          onChange={actionOnChange}
        />
        <button className="form-button">Create task</button>
      </form>
    </>
  );
};

export default Form;
