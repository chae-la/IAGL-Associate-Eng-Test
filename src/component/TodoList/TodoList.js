import React, { Component, useState } from "react";
import Todo from "../Todo/Todo";
import { fetchTodos } from "../../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;
    return (
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo, index) => {
              return <Todo key={`todo-${index}`} todo={todo.task} />;
            })
          : "No todos, yay!"}
      </ul>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});
export default connect(mapStateToProps, {
  fetchTodos,
})(TodoList);
