import { useState } from "react";
import "./AddTodo.css";

const AddTodo = () => {
const [task, setTask] = useState()
    const handleAdd = () =>{

    }
return (
    <div className="add-todo">
        <input type='text' className="add-todo-input" placeholder="Enter Task" onChan