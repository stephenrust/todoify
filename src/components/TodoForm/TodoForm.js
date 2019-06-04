import React from "react";

import "./style.css";

const TodoForm = ({
  todoFormValue,
  handleTodoInput,
  handleTodoSubmit,
  todoFormError
}) => {
  return (
    <div className="ui segment todoForm">
      <form className="ui form" onSubmit={handleTodoSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="What do you need to get done?"
            value={todoFormValue}
            onChange={handleTodoInput}
          />
        </div>
        <button
          className="ui button fluid submitTodoButton"
          onClick={handleTodoSubmit}
        >
          Add Todo
        </button>
        <div className="ui segment">
          <p>{todoFormError}</p>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
