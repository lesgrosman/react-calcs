import React from "react";
import { Link } from "react-router-dom";
import classes from "./FinishModal.module.css";

export default function FinishModal(props) {
  function correctAnswers() {
    return props.quiz.filter((item) => item.status === "success").length;
  }

  const label = props.noTimeLeft ? "The time is over :(" : "Test is finished";

  return (
    <div className={classes.FinishModal}>
      <h1>{label}</h1>
      <h3>
        You've answered correctly {correctAnswers()} questions of {props.numAll}{" "}
        !
      </h3>
      <Link to="/">
        <button onClick={() => console.log("btn")} className="btn btn-primary">
          Take test again!
        </button>
      </Link>
    </div>
  );
}
