import React, { useState, useEffect } from "react";
import Error from "../../components/Error/Error";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [numOfCalcs, setNum] = useState(0);
  const [disable, inputControl] = useState(false);

  function handleChange(event) {
    setNum(+event.target.value);
  }

  useEffect(() => {
    if (typeof numOfCalcs === 'number' && (numOfCalcs > 0 && numOfCalcs <= 20)) {
      inputControl(false);
    } else {
      inputControl(true);
    }
  }, [numOfCalcs]);

  console.log(numOfCalcs)

  return (
    <div className={classes.Home}>
      <div className={classes.main}>
        <h3>NoC</h3>
        <form onSubmit={() => props.setTest(numOfCalcs)}>
          <input onChange={handleChange} />

          <Link to="/calculations">
            <button
              disabled={disable}
              onClick={() => props.setTest(numOfCalcs)}
            >
              START
            </button>
          </Link>
        </form>
      </div>
      <Error disable={disable} />
    </div>
  );
}
