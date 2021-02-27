import React, { useState } from "react";

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
      isCompleted: false,
      createTime: new Date(),
      wasEdited: false,
      lastEdit: null,
    });
    setTodoId(todoId + 1);
    setInput("");
  };

  return (
    <form className="create-todo-container" onSubmit={handleSubmit}>
      <input
        className="create-todo-input"
        type="text"
        onChange={handleInputChange}
        placeholder="Add some quest to your diary... ;)"
        value={input}
      />
      <button className="create-todo-button">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
