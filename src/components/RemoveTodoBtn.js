import React from "react";

const RemoveTodoBtn = props => {
  return (
    <button onClick={props.handleRemoveTodo}>
      <i className="times circle outline icon red large fitted" />
    </button>
  );
};

export default RemoveTodoBtn;
