import React from "react";

import TodoTable from "./components/TodoTable";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <p className="appHeader">React ToDo</p>
      <TodoTable />
    </div>
  );
};

export default App;
