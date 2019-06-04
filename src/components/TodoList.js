import React from "react";

import TodoItem from "./TodoItem/TodoItem";

const TodoList = props => {
  if (props.todos.length === 0) {
    return (
      <h4 style={{ textAlign: "center", color: "#ffffff" }}>No Todos...</h4>
    );
  }

  return (
    <div className="ui container grid">
      {props.todos.map(({ id, todoContent, isComplete, createdAt }) => (
        <TodoItem
          key={id}
          id={id}
          todoItemContent={todoContent}
          isComplete={isComplete}
          createdAt={createdAt}
          handleRemoveTodo={props.handleRemoveTodo}
          handleCompleteTodo={props.handleCompleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
