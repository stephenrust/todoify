import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

import "./TodoTable.css";

class TodoTable extends Component {
  state = {
    todoFormValue: "",
    todos: [],
    todoFormError: ""
  };

  handleTodoInput = event => {
    // Check that current input value is more than 3 characters. If so, set todoFormError to ''
    if (this.state.todoFormValue.length >= 3) {
      this.setState({
        todoFormError: ""
      });
    }
    this.setState({
      todoFormValue: event.target.value
    });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    // Check if todoFormValue is empty or less than 3 characters
    if (
      this.state.todoFormValue === "" ||
      this.state.todoFormValue.length < 3
    ) {
      // If it is, setState of todoFormError to display in TodoForm component
      this.setState({
        todoFormError: "Please enter a Todo with more than 3 characters"
      });
    } else {
      // Get timestamp for when the todo was created
      const currentTimestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

      // Create new Todo object
      const newTodo = {
        todoContent: this.state.todoFormValue,
        id: this.state.todos.length + 1,
        isComplete: false,
        createdAt: currentTimestamp,
        completedAt: ""
      };

      // Use spread operator to copy the current state and update the todos array with the newTodo object
      this.setState(
        {
          todos: [...this.state.todos, newTodo],
          // Clear form value after submitting
          todoFormValue: ""
        },
        () => {
          // Execute toast notification upon successful state update
          toast("Todo added!", {
            type: "success",
            hideProgressBar: true,
            closeOnClick: true,
            autoClose: 2000
          });
        }
      );
    }
  };

  handleRemoveTodo = (event, id) => {
    // Remove the selected todo from a copy of the todos array using filter
    // Make a copy of the current state
    let todosArray = [...this.state.todos];

    // Store result of .filter
    let filteredTodosArray = todosArray.filter(todo => todo.id !== id);

    // Set the todos state with the filtered array
    this.setState({
      todos: filteredTodosArray
    });
  };

  handleCompleteTodo = (event, id) => {
    event.preventDefault();
    // Get current timestamp
    const currentTimestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    // Get copy of current state
    let todosArray = [...this.state.todos];

    // Need to find the index of the todo that was clicked from the array of todos.
    let todoIndex = todosArray.findIndex(todo => todo.id === id);

    // Set the value of the isComplete property of the selected todo to the opposite of its current value in state.
    todosArray[todoIndex].isComplete = !this.state.todos[todoIndex].isComplete;

    // Check if currently selected todo has a completedAt value
    if (todosArray[todoIndex].completedAt !== "") {
      // Set the completedAt property of the selected todo
      todosArray[todoIndex].completedAt = "";
      this.setState({
        todos: todosArray
      });
    } else {
      todosArray[todoIndex].completedAt = currentTimestamp;
      // Update the state with the new todosArray
      this.setState({
        todos: todosArray
      });
    }
  };

  render() {
    let currentTodoCount = this.state.todos.length;
    let todoListAreaContent;

    if (currentTodoCount !== 0) {
      todoListAreaContent = (
        <TodoList
          todos={this.state.todos}
          handleRemoveTodo={this.handleRemoveTodo}
          handleCompleteTodo={this.handleCompleteTodo}
        />
      );
    } else {
      todoListAreaContent = (
        <p style={{ color: "#fff", textAlign: "center", fontWeight: 100 }}>
          No todos yet...
        </p>
      );
    }

    return (
      <div className="ui grid container stackable">
        <div className="appHeadline">
          <h2>Todoify</h2>
          <p>Get stuff done. Get on with your life.</p>
        </div>

        <div className="row">
          <div className="column">
            <TodoForm
              todoFormValue={this.state.todoFormValue}
              handleTodoInput={this.handleTodoInput}
              handleTodoSubmit={this.handleTodoSubmit}
              todoFormError={this.state.todoFormError}
            />
          </div>
        </div>
        <div className="row">
          <div className="ten wide column">{todoListAreaContent}</div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default TodoTable;
