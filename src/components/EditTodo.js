import React, { useState } from "react";

const EditTodo = ({ todo, handleUpdate, editInputFocus }) => {
  const [input, setInput] = useState(todo.text);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="edit-todo-container">
      <input
        className="edit-todo-input"
        ref={editInputFocus}
        type="text"
        // placeholder={todo.text}
        value={input}
        onChange={handleInputChange}
      />
      <button
        className="edit-todo-button"
        onClick={() => handleUpdate(todo.id, input)}
      >
        Update
      </button>
    </form>
  );
};
export default EditTodo;
