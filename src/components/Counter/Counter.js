import React, { Component } from "react";
import classes from "./Counter.module.css";
import {connect} from 'react-redux'

class Counter extends Component {

  render() {
    const {finishedCalcs, numOfCalcs} = this.props
    return (
      <div className={classes.Counter}>
        {finishedCalcs}/{numOfCalcs}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    finishedCalcs: state.finishedCalcs,
    numOfCalcs: state.numOfCalcs
  }
}

export default connect(mapStateToProps, null)(Counter)
