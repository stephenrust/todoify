import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const TodoItem = props => {
  let todoItemStyle = classNames({
    todoItem: true,
    row: true,
    complete: props.isComplete
  });

  let todoItemTextStyle = classNames({
    description: true,
    completed: props.isComplete
  });

  let todoItemCompleteIcon = classNames({
    "check circle icon inverted fitted outline": !props.isComplete,
    "undo alternate circle icon inverted fitted": props.isComplete
  });

  let todoItemCreatedAtStyle = classNames({
    todoItemCreatedAt: true,
    "todoItemCreatedAt completed": props.isComplete
  });

  return (
    <div className={todoItemStyle}>
      <div className="eleven wide column">
        <div className="todoContent">
          <p className={todoItemTextStyle}>{props.todoItemContent}</p>
          <p className={todoItemCreatedAtStyle}>
            Created at: {props.createdAt}
          </p>
        </div>
      </div>
      <div className="five wide column right aligned">
        <div className="todoActions">
          <div className="right floated content">
            <button
              onClick={event => props.handleCompleteTodo(event, props.id)}
            >
              <i
                className={todoItemCompleteIcon}
                alt="Mark Todo Complete"
                style={{ cursor: "pointer" }}
              />
            </button>
            <button onClick={event => props.handleRemoveTodo(event, props.id)}>
              <i
                className="times circle icon inverted fitted outline"
                alt="Remove Todo"
                style={{ cursor: "pointer" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  todoItemContent: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
};

export default TodoItem;
