import React from "react";
import TodoItem from "./TodoItem";

const List = (props) => {
  const { todos, setTodos } = props;

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
    </ul>
  );
};

export default List;
