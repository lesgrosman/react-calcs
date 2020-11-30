import React, { useState, useEffect } from "react";
import Hoc from "../../hoc/Hoc";
import classes from "./Timer.module.css";
import {connect} from 'react-redux'


function Timer(props) {

  const [seconds, setTimer] = useState(60)

  useEffect(() => {
    if (finishedCalcs !== numOfCalcs) {
      seconds > 0 && setTimeout(() => setTimer(seconds - 1), 1000)
    }   
  }, [seconds])

  const { quiz, finishedCalcs, numOfCalcs } = props;
  const label = seconds < 1 ? true : numOfCalcs === finishedCalcs ? false : null;

  if (seconds < 1 ) {
    return <Hoc noTimeLeft={label} quiz={quiz}/>;
  }
  
  const secs = seconds < 10 ? `0${seconds}` : seconds;

  return (
  <div className={classes.Timer}>00:{secs}</div>
  )

}

const mapStateToProps = (state) => {
  return {
    finishedCalcs: state.finishedCalcs,
    numOfCalcs: state.numOfCalcs
  }
}

export default connect(mapStateToProps, null)(Timer)
