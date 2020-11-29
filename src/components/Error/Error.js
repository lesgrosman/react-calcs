import React from "react";
import classes from "./Error.module.css";

const Error = (props) => {
  const cls = [classes.Error];
  if (props.disable) {
    cls.push(classes.visible);
  }
  return (
    <span className={cls.join(" ")}>
      Number of calculations should be between 1 and 20
    </span>
  );
};

export default Error;
