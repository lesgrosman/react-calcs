import React, { useState, useEffect } from "react";
import Hoc from "../../hoc/Hoc";
import classes from "./Timer.module.css";

function Timer(props) {

  const [seconds, setTimer] = useState(10)

  useEffect(() => {
    if (numAll !== done) {
      seconds > 0 && setTimeout(() => setTimer(seconds - 1), 1000)
    }   
  }, [seconds])

  const { quiz, numAll, done } = props;
  const label = seconds < 1 ? true : numAll === done ? false : null;

  if (seconds < 1 ) {
    return <Hoc noTimeLeft={label} quiz={quiz} numAll={numAll} />;
  }
  
  const secs = seconds < 10 ? `0${seconds}` : seconds;

  return (
  <div className={classes.Timer}>00:{secs}</div>
  )

}

export default Timer
