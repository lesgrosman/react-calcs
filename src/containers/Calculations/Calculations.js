import React, { Component } from "react";
import classes from "./Calculations.module.css";
import Counter from "../../components/Counter/Counter";
import Item from "../../components/Item/Item";
import Timer from "../../components/Timer/Timer";
import Hoc from "../../hoc/Hoc";
import {connect} from 'react-redux'
import {getPathName} from '../../store/actions/actions'



///////////////////////////////////////////////////

class Calculations extends Component {


  componentDidMount() {
    this.props.getPathName(this.props.location.pathname)
  }

  renderItems = () => {
    const arr = [];
    for (let i = 0; i < this.props.numOfCalcs; i++) {
      arr.push(i);
    }
    return arr.map((i) => {
      return <Item key={i}/>
    });
  };

  render() {
    const { finishedCalcs, numOfCalcs } = this.props;
    const items = this.renderItems();
    return (
      <div>
        <div className={classes.Calculations}>{items}</div>
        <Counter/>
        <Timer/>
        {finishedCalcs === numOfCalcs ? (
        <Hoc/>
      ) : null}
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    numOfCalcs: state.numOfCalcs,
    finishedCalcs: state.finishedCalcs,
  }
}

const mapDispatchToProps = {
  getPathName
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculations)
