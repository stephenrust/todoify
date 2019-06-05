import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem/TodoItem";

const TodoList = props => {
  // If the todos prop is empty, render a 'No todos' element
  if (props.todos.length === 0) {
    return (
      <h4 style={{ textAlign: "center", color: "#ffffff", fontWeight: 100 }}>
        No Todos yet...
      </h4>
    );
  }
  // Map over todos
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

TodoList.propTypes = {
  todos: PropTypes.array,
  id: PropTypes.number,
  todoContent: PropTypes.string,
  isComplete: PropTypes.bool,
  createdAt: PropTypes.string
};

export default TodoList;
