import React from "react";
import Button from "./Button";
import "../styles/input.css";
const Input = (props) => {
  const { type, state, setState, handleFunction } = props;

  return (
    <div className="todo-input">
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <Button label="ADD" action={handleFunction} styles="add" />
    </div>
  );
};

export default Input;
