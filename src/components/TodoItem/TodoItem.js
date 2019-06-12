import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TodoItemMobileButton from "./TodoItemMobileButton/TodoItemMobileButton";

import "./style.css";

class TodoItem extends Component {
  state = {
    updateTodoInput: ""
  };

  EditTodoInputChange = event => {
    this.setState({
      updateTodoInput: event.target.value
    });
  };

  renderCompletedAt() {
    if (this.props.isComplete) {
      return (
        <p className="todoItemCompletedAt">
          Completed at: {this.props.completedAt}
        </p>
      );
    }
    return null;
  }

  render() {
    let todoItemStyle = classNames({
      "todoItem row": true,
      complete: this.props.isComplete
    });

    let todoItemTextStyle = classNames({
      todoBody: true,
      completed: this.props.isComplete
    });

    let todoItemCompleteIcon = classNames({
      "check circle icon outline fitted large todoActionIconGreen": !this.props
        .isComplete,
      "undo alternate circle icon inverted fitted large": this.props.isComplete
    });

    let todoItemRemoveIcon = classNames({
      "times circle icon outline fitted large todoActionIconGreen": !this.props
        .isComplete,
      "times circle inverted icon outline fitted large": this.props.isComplete
    });

    let todoItemCreatedAtStyle = classNames({
      todoItemCreatedAt: true,
      "todoItemCreatedAt completed": this.props.isComplete
    });

    const isEditable = this.props.isEditable;
    let editForm;

    if (isEditable) {
      editForm = (
        <form
          className="ui form todoEditInput"
          onSubmit={event =>
            this.props.handleUpdateTodo(
              event,
              this.state.updateTodoInput,
              this.props.id
            )
          }
        >
          <div className="field">
            <label
              style={
                this.props.isComplete ? { color: "#fff" } : { color: "#00403a" }
              }
            />
            <input
              type="text"
              value={this.state.updateTodoInput}
              placeholder={this.props.todoItemContent}
              onChange={this.EditTodoInputChange}
              className="todoEditInputArea"
            />
          </div>
          <button
            className="mini ui button updateTodo"
            onClick={event =>
              this.props.handleUpdateTodo(
                event,
                this.state.updateTodoInput,
                this.props.id
              )
            }
          >
            Update
          </button>
        </form>
      );
    }

    return (
      <div className={todoItemStyle}>
        <div className="twelve wide column">
          <div className="todoContent">
            <div className="todoBody">
              <span className={todoItemTextStyle}>
                {this.props.todoItemContent}
              </span>
              <span
                className="editTodo"
                onClick={event =>
                  this.props.handleEditTodo(event, this.props.id)
                }
              >
                <i
                  className="pencil alternate icon small left floated"
                  style={
                    this.props.isComplete ? { color: "#fff" } : { color: "" }
                  }
                />
              </span>
            </div>
            {isEditable ? editForm : null}
            <p className={todoItemCreatedAtStyle}>
              Created on: {this.props.createdAt}
            </p>
            {this.renderCompletedAt()}
          </div>
        </div>
        <div className="four wide column right aligned large screen computer tablet only">
          <div className="todoActions">
            <div className="right floated content">
              <span className="todoActionButtonWrapper">
                <i
                  className={todoItemCompleteIcon}
                  alt="Mark Todo Complete"
                  style={{ cursor: "pointer" }}
                  onClick={event =>
                    this.props.handleCompleteTodo(event, this.props.id)
                  }
                />
              </span>
              <span className="todoActionButtonWrapper">
                <i
                  className={todoItemRemoveIcon}
                  alt="Remove Todo"
                  style={{ cursor: "pointer" }}
                  onClick={event =>
                    this.props.handleRemoveTodo(event, this.props.id)
                  }
                />
              </span>
            </div>
          </div>
        </div>
        <TodoItemMobileButton
          isComplete={this.props.isComplete}
          handleCompleteTodo={this.props.handleCompleteTodo}
          id={this.props.id}
          buttonText={this.props.isComplete ? "Undo" : "Complete"}
          onClick={event => this.props.handleCompleteTodo(event, this.props.id)}
        />
        <TodoItemMobileButton
          isComplete={this.props.isComplete}
          handleRemoveTodo={this.props.handleRemoveTodo}
          id={this.props.id}
          onClick={event => this.props.handleRemoveTodo(event, this.props.id)}
          buttonText="Remove"
        />
      </div>
    );
  }
}

TodoItem.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  todoItemContent: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
};

export default TodoItem;
