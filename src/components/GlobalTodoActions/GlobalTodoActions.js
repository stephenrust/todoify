import React from "react";

const GlobalTodoActions = ({
  handleRemoveAllTodos,
  handleCompleteAllTodos
}) => {
  return (
    <div className="row">
      <div className="eight wide column center aligned">
        <button
          onClick={handleCompleteAllTodos}
          className="ui button small fluid inverted"
        >
          Mark All Complete
        </button>
      </div>
      <div className="eight wide column center aligned">
        <button
          onClick={handleRemoveAllTodos}
          className="ui button small fluid inverted"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default GlobalTodoActions;
