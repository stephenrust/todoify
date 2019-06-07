import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";

const TodoItem = props => {
  let todoItemStyle = classNames({
    "todoItem row": true,
    complete: props.isComplete
  });

  let todoItemTextStyle = classNames({
    todoBody: true,
    completed: props.isComplete
  });

  let todoItemCompleteIcon = classNames({
    "check circle icon inverted outline fitted large": !props.isComplete,
    "undo alternate circle icon inverted fitted large": props.isComplete
  });

  let todoItemCreatedAtStyle = classNames({
    todoItemCreatedAt: true,
    "todoItemCreatedAt completed": props.isComplete
  });

  let mobileButtonStyle = classNames({
    "ui labeled icon button fluid": true,
    mobileButtonLight: props.isComplete
  });

  let mobileButtonCompleteIcon = classNames({
    icon: true,
    check: !props.isComplete,
    undo: props.isComplete
  });

  function renderCompletedAt() {
    if (props.isComplete) {
      return (
        <p className="todoItemCompletedAt">Completed at: {props.completedAt}</p>
      );
    }
    return null;
  }

  const isEditable = props.isEditable;
  let editForm;

  if (isEditable) {
    editForm = (
      <div className="ui form todoEditInput">
        <div className="field">
          <label>Edit Todo</label>
          <textarea
            value=""
            placeholder={props.todoItemContent}
            rows="2"
            onChange={props.handleEditTodoInput}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={todoItemStyle}>
      <div className="twelve wide column">
        <div className="todoContent">
          <div className="todoBody">
            <span
              className="editTodo"
              onClick={event => props.handleEditTodo(event, props.id)}
            >
              <i className="edit outline icon inverted large left floated" />
            </span>
            <span className={todoItemTextStyle}>{props.todoItemContent}</span>
          </div>
          {isEditable ? editForm : null}
          <p className={todoItemCreatedAtStyle}>
            Created on: {props.createdAt}
          </p>
          {renderCompletedAt()}
        </div>
      </div>
      <div className="four wide column right aligned large screen computer tablet only">
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
                className="times circle icon inverted outline fitted large"
                alt="Remove Todo"
                style={{ cursor: "pointer" }}
                onClick={event => props.handleRemoveTodo(event, props.id)}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="eight wide column center aligned mobile only mobileButtonColumn">
        <button
          onClick={event => props.handleCompleteTodo(event, props.id)}
          className={mobileButtonStyle}
        >
          <i className={mobileButtonCompleteIcon} />
          {props.isComplete ? "Undo" : "Complete"}
        </button>
      </div>
      <div className="eight wide column center aligned mobile only mobileButtonColumn">
        <button
          onClick={event => props.handleRemoveTodo(event, props.id)}
          className={mobileButtonStyle}
        >
          <i className="times icon" />
          Remove
        </button>
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
