import React, { useState } from "react";

import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //Checking if input is empty or has just white spaces
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    console.log([...todos]);
  };

  const handleEdit = (id) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.editTodo = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleUpdate = (id, text) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = text;
        todo.editTodo = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((todo) => id !== todo.id);
    setTodos(updatedTodos);
  };

  const handleComplete = (id) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosMapping = [...todos].map((todo) => {
    if (todo.editTodo) {
      return (
        <EditTodo
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          handleUpdate={handleUpdate}
        />
      );
    }
    return (
      <Todo
        key={todo.id}
        isCompleted={todo.isCompleted}
        todo={todo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
    );
  });

  return (
    <div className="todo-container">
      <div className="suppose-to-be-funny-text-container">
        <h3 className="title">Time to complete some Quests...</h3>
        <h4 className="subtitle">Isn't life just a RPG game?</h4>
      </div>
      <CreateTodo addTodo={addTodo} />
      {todosMapping}
    </div>
  );
};
export default TodoList;
