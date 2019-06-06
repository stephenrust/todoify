import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const TodoItem = props => {
  let todoItemStyle = classNames({
    "todoItem row": true,
    complete: props.isComplete
  });

  let todoItemTextStyle = classNames({
    description: true,
    completed: props.isComplete
  });

  let todoItemCompleteIcon = classNames({
    "check circle icon inverted outline fitted": !props.isComplete,
    "undo alternate circle icon inverted fitted": props.isComplete
  });

  let todoItemCreatedAtStyle = classNames({
    todoItemCreatedAt: true,
    "todoItemCreatedAt completed": props.isComplete
  });

  function renderCompletedAt() {
    if (props.completedAt !== "") {
      return (
        <p className="todoItemCompletedAt">Completed at: {props.completedAt}</p>
      );
    }
    return null;
  }

  return (
    <div className={todoItemStyle}>
      <div className="eleven wide column">
        <div className="todoContent">
          <p className={todoItemTextStyle}>{props.todoItemContent}</p>
          <p className={todoItemCreatedAtStyle}>
            Created at: {props.createdAt}
          </p>
          {renderCompletedAt()}
        </div>
      </div>
      <div className="five wide column right aligned">
        <div className="todoActions">
          <div className="right floated content">
            <button>
              <i
                className={todoItemCompleteIcon}
                alt="Mark Todo Complete"
                style={{ cursor: "pointer" }}
                onClick={event => props.handleCompleteTodo(event, props.id)}
              />
            </button>
            <button>
              <i
                className="times circle icon inverted outline fitted"
                alt="Remove Todo"
                style={{ cursor: "pointer" }}
                onClick={event => props.handleRemoveTodo(event, props.id)}
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
  completedAt: PropTypes.string,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
};

export default TodoItem;
