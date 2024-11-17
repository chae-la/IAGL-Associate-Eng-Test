import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function addTodo(newTodo) {
  return function(dispatch) {
    return axios
      .post("http://localhost:9091/api/todo", newTodo)
      .then(({ data }) => {
        dispatch(setTodos(data)); 
      })
      .catch((err) => {
        console.error("Error adding todo:", err);
      });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}