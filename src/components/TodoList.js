import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import { FaWindowClose } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    console.log([...todos]);
  };

  const handleEdit = (id) => {};

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((todo) => id !== todo.id);
    setTodos(updatedTodos);
  };

  const todoMapping = [...todos].map((todo) => (
    <div className="todo-item" key={todo.id}>
      <div>
        {" "}
        <p>{todo.text}</p>
      </div>
      <div>
        <span onClick={() => handleEdit(todo.id)} className="icon-edit">
          <VscEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)} className="icon-close">
          <VscError />
        </span>
      </div>
    </div>
  ));

  return (
    <div className="todo-container">
      <CreateTodo addTodo={addTodo} />
      <div className="suppose-to-be-funny-text-container">
        <h3 className="title">Time to complete some Quests ;)</h3>
        <h4 className="subtitle">Isn't life just a RPG game?</h4>
      </div>
      {todoMapping}
    </div>
  );
};
