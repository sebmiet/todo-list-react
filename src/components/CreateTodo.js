import React, { useState } from "react";

import { motion } from "framer-motion";

const CreateTodo = ({ addTodo, todoId }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: todoId,
      text: input,
      editTodo: false,
      isCompleted: false,
      createTime: new Date(),
      wasEdited: false,
      lastEdit: null,
    });

    setInput("");
  };

  return (
    <motion.form
      className="create-todo-container"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: "30vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
    >
      <input
        className="create-todo-input"
        type="text"
        onChange={handleInputChange}
        placeholder="Add some quest to your diary... ;)"
        value={input}
      />
      <motion.button
        className="create-todo-button"
        whileHover={{
          color: "#e2e2e2",
          transition: { duration: 1.5, yoyo: Infinity },
        }}
      >
        Add Todo
      </motion.button>
    </motion.form>
  );
};

export default CreateTodo;
