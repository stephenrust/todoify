import React from "react";

import TodoTable from "./components/TodoTable";

import "./App.css";

const App = () => {
  return (
    <div className="app2">
      <p className="appHeader">React ToDo</p>
      <TodoTable />
    </div>
  );
};

export default App;
