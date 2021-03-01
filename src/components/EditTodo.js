import React, { useState } from "react";
import { motion } from "framer-motion";

const EditTodo = ({ todo, handleUpdate }) => {
  const [input, setInput] = useState(todo.text);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(todo.id, input);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="edit-todo-container"
      initial={{ opacity: 0, x: -700 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ fade: "easeIn", duration: 0.3, type: "spring" }}
    >
      <input
        className="edit-todo-input"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <motion.button
        whileHover={{
          color: ["#000000", "#e2e2e2", "#000000"],
          transition: { duration: 2.5, repeat: Infinity },
        }}
        className="edit-todo-button"
        // onClick={() => handleUpdate(todo.id, input)}
      >
        Update
      </motion.button>
    </motion.form>
  );
};
export default EditTodo;
