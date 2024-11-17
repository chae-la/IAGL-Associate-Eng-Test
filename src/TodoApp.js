import React from "react";
import TodoList from "./component/TodoList/TodoList";
import AddTodo from "./component/AddTodo/AddTodo";

import "./styles.css";

export default function TodoApp() {

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo List</h1>
      <AddTodo  /> 
      <TodoList  /> 
    </div>
  );
}
