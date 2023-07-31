import React from "react";
import Button from "./Button";
import "../styles/todoItem.css";
const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <Button action={onDelete} label="Delete" styles="delete" />
    </li>
  );
};

export default TodoItem;
