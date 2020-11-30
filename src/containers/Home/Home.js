import React, { useState, useEffect } from "react";
import Error from "../../components/Error/Error";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {setNumberOfCalcs, clearFinishedAnswers, getPathName} from '../../store/actions/actions'


function Home(props) {
  const [disable, inputControl] = useState(false);

  function handleChange(event) {
    props.setNumberOfCalcs(+event.target.value)
  }



  useEffect(() => {
    const {numOfCalcs} = props
    if (typeof numOfCalcs === 'number' && (numOfCalcs > 0 && numOfCalcs <= 20)) {
      inputControl(false);
    } else {
      inputControl(true);
    }
    props.getPathName(props.location.pathname)
  }, [props.numOfCalcs]);
  
  

  return (
    <div className={classes.Home}>
      <div className={classes.main}>
        <h3>NoC</h3>
        <form onSubmit={props.clearFinishedAnswers}> 
          <input onChange={handleChange} />

          <Link to="/calculations">
            <button
              disabled={disable}
              onClick={props.clearFinishedAnswers}
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

const mapStateToProps = (state) => {
  return {
    numOfCalcs: state.numOfCalcs
  }
}


const mapDispatchToProps = {
    setNumberOfCalcs,
    clearFinishedAnswers,
    getPathName
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
