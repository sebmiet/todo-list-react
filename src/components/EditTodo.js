import React, { useState } from "react";
import { motion } from "framer-motion";

const EditTodo = ({ todo, handleUpdate }) => {
  const [input, setInput] = useState(todo.text);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <motion.form
      key={todo.id}
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
          color: "#e2e2e2",
          transition: { duration: 1, yoyo: Infinity },
        }}
        className="edit-todo-button"
        onClick={() => handleUpdate(todo.id, input)}
      >
        Update
      </motion.button>
    </motion.form>
  );
};
export default EditTodo;
