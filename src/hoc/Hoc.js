import React from "react";
import classes from "./Hoc.module.css";
import FinishModal from "../components/FinishModal/FinishModal";

const Hoc = (HocComponent) => {
  const MyComponent = (props) => {
    return (
      <div className={classes.Hoc}>
        <HocComponent {...props}></HocComponent>
      </div>
    );
  };
  return MyComponent;
};

export default Hoc(FinishModal);
