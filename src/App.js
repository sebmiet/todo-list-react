import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [data, setData] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <TodoList data={data} />
    </div>
  );
};

export default App;
