/* import { useState } from "react";
import useTodo from "../hooks/useTodo"; */

const Form = ({ actionOnChange, addNewTask }) => {
  return (
    <>
      <form className="form" autoComplete="off" onSubmit={addNewTask}>
        <label htmlFor="task" className="form_request">
          Write new task
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
