import React, { useState } from "react";
import Title from "./components/Title";
import List from "./components/List";
import Input from "./components/Input";
import "./styles/app.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
      
    }
  };

  return (
    <div className="todo-container">
      <Title label="To Do List" styles="todo-title" />
      <Input
        type="text"
        state={inputValue}
        setState={setInputValue}
        handleFunction={handleAddTodo}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
