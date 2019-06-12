import React from "react";

import "./style.css";

const TodoStats = props => {
  const openTodos = props.todos.filter(todo => todo.isComplete !== true).length;

  const completedTodos = props.todos.filter(todo => todo.isComplete === true)
    .length;

  const incompleteTodos = props.todos.filter(todo => todo.isComplete !== true)
    .length;

  let openTodoLabel;
  if (incompleteTodos === 0) {
    openTodoLabel = "Todos";
  } else if (incompleteTodos === 1) {
    openTodoLabel = "Todo";
  } else {
    openTodoLabel = "Todos";
  }

  let completeTodoLabel;
  if (completedTodos === 0) {
    completeTodoLabel = "Todos";
  } else if (completedTodos === 1) {
    completeTodoLabel = "Todo";
  } else {
    completeTodoLabel = "Todos";
  }

  return (
    <div className="row">
      <div className="todoStatContainer eight wide column">
        <h3 className="todoStat"> {openTodos} </h3>
        <p className="todoStatLabel">Incomplete {openTodoLabel}</p>
      </div>
      <div className="todoStatContainer eight wide column">
        <h3 className="todoStat">{completedTodos < 1 ? 0 : completedTodos}</h3>
        <p className="todoStatLabel">Complete {completeTodoLabel}</p>
      </div>
    </div>
  );
};

export default TodoStats;
