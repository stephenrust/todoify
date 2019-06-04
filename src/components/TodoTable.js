import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList";

class TodoTable extends Component {
  state = {
    todoFormValue: "",
    todos: [],
    todoFormError: ""
  };

  handleTodoInput = event => {
    this.setState({
      todoFormValue: event.target.value
    });
  };

  handleTodoSubmit = event => {
    event.preventDefault();

    if (this.state.todoFormValue === "") {
      console.log("empty");
      this.setState({
        todoFormError: "Todo cannot be empty. Please enter a todo."
      });
    } else {
      // Get timestamp for when the todo was created
      const currentTimestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
      // Create new Todo object
      const newTodo = {
        todoContent: this.state.todoFormValue,
        id: this.state.todos.length + 1,
        isComplete: false,
        createdAt: currentTimestamp
      };

      // Use spread operator to update the todos in state
      this.setState({
        todos: [newTodo, ...this.state.todos],
        // Clear form value after submitting
        todoFormValue: ""
      });
      toast("Todo added!", {
        type: "success",
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 2000
      });
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
    // Get copy of current state
    let todosArray = [...this.state.todos];

    // Need to find the index of the todo that was clicked from the array of todos.
    let todoIndex = todosArray.findIndex(todo => todo.id === id);

    // Set the value of the isComplete property of the selected todo to the opposite of its current value in state.
    todosArray[todoIndex].isComplete = !this.state.todos[todoIndex].isComplete;

    // Update the state with the new todosArray
    this.setState({
      todos: todosArray
    });
  };

  render() {
    return (
      <div className="ui grid container centered stackable">
        <div className="row">
          <div className="eight wide column">
            <TodoForm
              todoFormValue={this.state.todoFormValue}
              handleTodoInput={this.handleTodoInput}
              handleTodoSubmit={this.handleTodoSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="eight wide column">
            <TodoList
              todos={this.state.todos}
              handleRemoveTodo={this.handleRemoveTodo}
              handleCompleteTodo={this.handleCompleteTodo}
              todoFormError={this.state.todoFormError}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default TodoTable;
