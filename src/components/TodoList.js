import React, { useState } from "react";
import { motion } from "framer-motion";

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
      <div
        className="suppose-to-be-funny-text-container"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 2.5 }}
      >
        <motion.h3
          className="title"
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            x: { type: "spring", stiffness: 250 },
          }}
        >
          Time to complete some Quests...
        </motion.h3>
        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 1.8,
            x: { type: "spring", stiffness: 150 },
          }}
        >
          Isn't life just a RPG game?
        </motion.h4>
      </div>
      <CreateTodo addTodo={addTodo} />
      {todosMapping}
    </div>
  );
};
export default TodoList;
