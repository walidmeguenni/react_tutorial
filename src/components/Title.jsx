import React, { Fragment } from "react";
import "../styles/title.css";
const Title = (props) => {
  const { label, styles } = props;
  return (
    <Fragment>
      <h1 className={styles}>{label}</h1>
    </Fragment>
  );
};

export default Title;
