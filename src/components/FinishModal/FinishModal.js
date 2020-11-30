import React from "react";
import { Link } from "react-router-dom";
import classes from "./FinishModal.module.css";
import {connect} from 'react-redux'

function FinishModal(props) {

  const label = props.noTimeLeft ? "The time is over :(" : "Test is finished";

  return (
    <div className={classes.FinishModal}>
      <h1>{label}</h1>
      <h3>
        You've answered correctly {props.correctAnswers} questions of {props.numOfCalcs}!
        
      </h3>
      <Link to="/">
        <button className="btn btn-primary">
          Take test again!
        </button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.correctAnswers,
    numOfCalcs: state.numOfCalcs
  }
}

export default connect(mapStateToProps)(FinishModal)
