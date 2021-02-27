import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import {FaWindowClose} from 'react-icons/fa';
import {RiEditBoxFill} from 'react-icons/ri';
import {VscEdit} from 'react-icons/vsc';
import {VscError} from 'react-icons/vsc';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    console.log([...todos]);
  };

  const todoMapping = [...todos].map((todo) => (
    <div className="todo-item" key={todo.id}>
     <div> <p>{todo.text}</p></div>
      <div><span className="icon-edit"><VscEdit/></span>
      <span className="icon-close"><VscError/></span></div>
    </div>
  ));

  return (
    <div className="todo-container">
    
      <CreateTodo addTodo={addTodo} />
    <h3 className="title">What's the plan fot today?</h3>
      {todoMapping}
    </div>
  );
};
