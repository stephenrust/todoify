import React from "react";

import "./style.css";

const TodoStats = props => {
  const totalTodos = props.todos.length;
  let multipleTodos = false;

  const openTodos = props.todos.filter(todo => todo.isComplete !== true).length;

  const completedTodos = props.todos.filter(todo => todo.isComplete === true)
    .length;

  if (totalTodos > 1) {
    multipleTodos = true;
  }

  let openTodoLabel;
  if (completedTodos > 1) {
    openTodoLabel = "Todo Items";
  } else {
    openTodoLabel = "Todo Item";
  }

  return (
    <div className="row">
      <div className="todoStatContainer eight wide column">
        <h3 className="todoStat"> {openTodos} </h3>
        <p className="todoStatLabel">
          Open {multipleTodos ? "Todo Items" : "Todo Item"}
        </p>
      </div>
      <div className="todoStatContainer eight wide column">
        <h3 className="todoStat">{completedTodos < 1 ? 0 : completedTodos}</h3>
        <p className="todoStatLabel">Completed {openTodoLabel}</p>
      </div>
    </div>
  );
};

export default TodoStats;
