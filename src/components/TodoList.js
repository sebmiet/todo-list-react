import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    console.log([...todos]);
  };

  const handleEdit = (id) => {
    [...todos].filter((todo) => id === todo.id);
  };

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((todo) => id !== todo.id);
    setTodos(updatedTodos);
  };

  const todoMapping = [...todos].map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  ));

  return (
    <div className="todo-container">
      <div className="suppose-to-be-funny-text-container">
        <h3 className="title">Time to complete some Quests...</h3>
        <h4 className="subtitle">Isn't life just a RPG game?</h4>
      </div>
      <CreateTodo addTodo={addTodo} />

      {todoMapping}
    </div>
  );
};
