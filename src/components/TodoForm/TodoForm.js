import React from "react";
import classNames from "classnames";
import "./style.css";

const TodoForm = ({
  todoFormValue,
  handleTodoInput,
  handleTodoSubmit,
  todoFormError
}) => {
  let todoFormErrorStyle = classNames({
    "ui segment errorSegment": true,
    hasError: todoFormError
  });
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
        <div className={todoFormErrorStyle}>{todoFormError}</div>
        <button
          className="ui button fluid submitTodoButton"
          onClick={handleTodoSubmit}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
