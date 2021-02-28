import React from "react";
import { motion } from "framer-motion";

import { FaEdit, FaTimes, FaCheck } from "react-icons/fa";

const Todo = ({ todo, handleDelete, handleEdit, handleComplete }) => {
  return (
    <>
      <motion.div
        className={todo.isCompleted ? "todo-item-completed" : "todo-item"}
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ fade: "easeIn", duration: 0.3, type: "spring" }}
        exit={{ opacity: 0, transition: { fade: "easeIn", duration: 0.3 } }}
      >
        <div
          onClick={() => handleComplete(todo.id)}
          className="todo-item-complete-text"
        >
          <p>{todo.text}</p>
        </div>
        <div>
          {!todo.isCompleted && (
            <span onClick={() => handleEdit(todo.id)} className="icon-edit">
              <FaEdit />
            </span>
          )}
          {todo.isCompleted && (
            <span className="icon-done">
              <FaCheck />
            </span>
          )}
          <span onClick={() => handleDelete(todo.id)} className="icon-close">
            <FaTimes />
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Todo;
