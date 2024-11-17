import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchTodos, addTodo } from "../actions/index"; 


const AddTodo = ({ addTodo, fetchTodos }) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTodo = { task };
  
      try {
        await addTodo(newTodo);
        fetchTodos(); 
        setTask(""); 
        console.log("Task Added")
      } catch (err) {
        console.error("Error adding todo:", err);
      }
    } else {
      alert("Please enter a task");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={task}
        className="add-todo-input"
        placeholder="Enter Task"
        onChange={handleInput}
      />
      <button type="submit" className="add-todo-button">
        +
      </button>
    </form>
  );
};

export default connect(null, { addTodo, fetchTodos })(AddTodo);