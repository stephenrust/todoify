import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import TodoItem from "../TodoItem/TodoItem";
import EmptyTodoList from "../EmptyTodoList";

import "./style.css";

const TodoList = props => {
  return (
    <div className="ui container grid">
      <TransitionGroup component={null}>
        {props.todos.map(
          ({ id, todoContent, isComplete, createdAt, completedAt }) => (
            <CSSTransition key={id} timeout={300} classNames="item">
              <TodoItem
                key={id}
                id={id}
                todoItemContent={todoContent}
                isComplete={isComplete}
                createdAt={createdAt}
                completedAt={completedAt}
                handleRemoveTodo={props.handleRemoveTodo}
                handleCompleteTodo={props.handleCompleteTodo}
              />
            </CSSTransition>
          )
        )}
      </TransitionGroup>
      <EmptyTodoList todos={props.todos} />
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
