import React from "react";
import { VscEdit } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";

const Todo = ({ todo, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="todo-item">
        <div>
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
    </>
  );
};

export default Todo;
