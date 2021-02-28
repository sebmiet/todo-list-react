import React from "react";
import { FaEdit, FaTimes, FaCheck } from "react-icons/fa";

const Todo = ({ todo, handleDelete, handleEdit, handleComplete }) => {
  return (
    <>
      <div className={todo.isCompleted ? "todo-item-completed" : "todo-item"}>
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
      </div>
    </>
  );
};

export default Todo;
