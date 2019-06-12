import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import TodoItem from "../TodoItem/TodoItem";

import "./style.css";

class TodoList extends Component {
  render() {
    const todosArray = this.props.todos.map(todo => {
      return (
        <CSSTransition
          key={todo.id}
          timeout={300}
          classNames="item"
          appear={false}
        >
          <TodoItem
            key={todo.id}
            id={todo.id}
            todoItemContent={todo.todoContent}
            isComplete={todo.isComplete}
            createdAt={todo.createdAt}
            completedAt={todo.completedAt}
            isEditable={todo.isEditable}
            handleCompleteTodo={this.props.handleCompleteTodo}
            handleRemoveTodo={this.props.handleRemoveTodo}
            handleEditTodo={this.props.handleEditTodo}
            handleUpdateTodo={this.props.handleUpdateTodo}
          />
        </CSSTransition>
      );
    });

    return (
      <div className="ui container grid">
        <TransitionGroup component={null}>{todosArray}</TransitionGroup>
      </div>
    );
  }
}

// const TodoList = ({ todos, handleRemoveTodo, handleCompleteTodo }) => {
//   return (
//     <div className="ui container grid">
//       <TransitionGroup component={null}>
//         {todos.map(todo => (
//           <CSSTransition key={todo.id} timeout={300} classNames="item">
//             <TodoItem
//               key={todo.id}
//               id={todo.id}
//               todoItemContent={todo.todoContent}
//               isComplete={todo.isComplete}
//               createdAt={todo.createdAt}
//               completedAt={todo.completedAt}
//               handleRemoveTodo={handleRemoveTodo}
//               handleCompleteTodo={handleCompleteTodo}
//             />
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     </div>
//   );
// };

TodoList.propTypes = {
  todos: PropTypes.array,
  id: PropTypes.number,
  todoContent: PropTypes.string,
  isComplete: PropTypes.bool,
  createdAt: PropTypes.string
};

export default TodoList;
