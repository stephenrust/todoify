import React from "react";

import "./style.css";

const TodoStats = props => {
  const totalTodos = props.todos.length;

  const openTodos = props.todos.filter(todo => todo.isComplete !== true).length;

  const completedTodos = props.todos.filter(todo => todo.isComplete === true)
    .length;

  let multipleTodos = false;
  if (totalTodos > 1) {
    multipleTodos = true;
  }

  return (
    <div className="ui grid statsGrid">
      <div className="todoStatContainer eight wide column">
        <h3 className="todoStat"> {openTodos} </h3>
        <p className="todoStatLabel">Open {multipleTodos ? "Todos" : "Todo"}</p>
      </div>
      <div className="todoStatContainer eight wide column">
        <h3 className="todoStat">{completedTodos < 1 ? 0 : completedTodos}</h3>
        <p className="todoStatLabel">Completed Todos</p>
      </div>
    </div>
  );
};

export default TodoStats;
