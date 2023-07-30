import React from "react";
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <Title />
      <Paragraph />
      <Button name="Buy" styles="delete"/>
    </div>
  );
};

export default App;
