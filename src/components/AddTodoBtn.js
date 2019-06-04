import React from "react";

const AddTodoBtn = props => {
  return (
    <button onClick={props.handleCompleteTodo}>
      <i className="check circle outline icon green large fitted" />
    </button>
  );
};

export default AddTodoBtn;
