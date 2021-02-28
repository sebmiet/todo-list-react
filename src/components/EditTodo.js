import React, { useState } from "react";
import { motion } from "framer-motion";

const EditTodo = ({ todo, handleUpdate, editInputFocus }) => {
  const [input, setInput] = useState(todo.text);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <motion.form
      className="edit-todo-container"
      initial={{ opacity: 0, x: -700 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ fade: "easeIn", duration: 0.3 }}
    >
      <input
        className="edit-todo-input"
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
    </motion.form>
  );
};
export default EditTodo;
