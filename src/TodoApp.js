import React, { useState } from "react";
import TodoList from "./component/TodoList/TodoList";
import "./styles.css";
import AddTodo from "./component/AddTodo/AddTodo";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo List</h1>
      <AddTodo />
      {
      todos.length === 0 ?
      <div><h2>Yay! Nothing to do</h2></div> :
      todos.map((todo) => (
        <div>{todo}</div>
      ))}
      {/* <TodoList /> */}
    </div>
  );
}
