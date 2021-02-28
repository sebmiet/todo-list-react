import React, { useState } from "react";

import { motion } from "framer-motion";

const CreateTodo = (props) => {
  const [input, setInput] = useState("");
  const [todoId, setTodoId] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
      id: todoId,
      text: input,
      editTodo: false,
      isCompleted: false,
      createTime: new Date(),
      wasEdited: false,
      lastEdit: null,
    });
    setTodoId(todoId + 1);
    setInput("");
  };

  return (
    <motion.form
      className="create-todo-container"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: "100vh" }}
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
      <button className="create-todo-button">Add Todo</button>
    </motion.form>
  );
};

export default CreateTodo;
