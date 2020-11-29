import React, { Component } from "react";
import classes from "./Counter.module.css";

export default class Counter extends Component {
  state = {
    done: 0
  };

  componentDidUpdate(prevProps) {
    if (prevProps.quiz !== this.props.quiz) {
      this.countDone();
    }
  }

  countDone = () => {
    const { quiz } = this.props;
    const done = quiz.filter((item) => {
      return item.disabled;
    });
    this.setState({
      done: done.length
    });
  };
  render() {
    return (
      <div className={classes.Counter}>
        {this.state.done}/{this.props.allNums}
      </div>
    );
  }
}
