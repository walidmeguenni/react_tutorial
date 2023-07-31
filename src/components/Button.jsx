import React from "react";
import "../styles/button.css";
const Button = (props) => {
  const { action, styles, label } = props;
  return (
    <button type="button" className={styles} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
