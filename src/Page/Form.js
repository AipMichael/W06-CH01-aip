const Form = () => {
  return (
    <>
      <form className="form" autoComplete="off">
        <label htmlFor="newTask" className="form_request">
          Write new To Do
        </label>
        <input
          type="text"
          id="newTask"
          placeholder="E.g.: Fix my bed"
          required={false}
        />
        <button className="form-button">Create task</button>
      </form>
    </>
  );
};

export default Form;
