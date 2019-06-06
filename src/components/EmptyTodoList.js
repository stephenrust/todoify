import React from "react";

const EmptyTodoList = props => {
  if (props.todos.length === 0) {
    return (
      <div className="column">
        <p style={{ textAlign: "center", color: "#ffffff" }}>No Todos yet...</p>
      </div>
    );
  }
  return null;
};

export default EmptyTodoList;
