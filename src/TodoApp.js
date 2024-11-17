import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import "./styles.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:9091/api/todo")  
      .then((res) => {
        console.log("Fetched todos:", res.data);  
        setTodos(res.data); 
      })
      .catch((err) => {
        console.error("Error fetching todos:", err);  
      });
  }, []);  

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);  
  };

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
