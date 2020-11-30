import React, { Component } from "react";
import {connect} from 'react-redux'
import {countFinishedCalcs, countCorrectAnswers} from '../../store/actions/actions'
import { createCalcs, randomAction} from '../../createCalcs/createCalcs'
import classes from "./Item.module.css";


class Item extends Component {

  state = createCalcs()

  componentDidMount() {
    this.setCorrectAnswer();
  }

  onChangeHandler = (event) => {
    this.setState({
      inputValue: +event.target.value,
      touched: true
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const {inputValue, correctAnswer} = this.state
    const condition = inputValue === correctAnswer
        ? "success"
        : inputValue === ""
        ? "error"
        : "error";
    this.props.countCorrectAnswers(condition)  
    this.props.countFinishedCalcs()

    this.setState({
      status: condition,
      disabled: true
    });
  };

  setAction = (action, numA, numB) => {
    switch (action) {
      case "+":
        return numA + numB;
      case "-":
        return numA - numB;
      case "x":
        return numA * numB;
      default:
        return;
    }
  };

  setCorrectAnswer = () => {
    const { numA, numB, action } = this.state;
    this.setState({
      correctAnswer: this.setAction(action, numA, numB)
    });
    
  };
  
  render() {
    const cls = [classes.Item];
    if (this.state.touched && this.state.status !== "") {
      if (this.state.status === "success") {
        cls.push(classes.success);
      } else {
        cls.push(classes.error);
      }
    }

    return (
      <div className={cls.join(" ")}>
        {this.state.numA} {this.state.action} {this.state.numB} =
        <form onSubmit={this.onSubmitHandler}>
          <input
            disabled={this.state.disabled}
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  countFinishedCalcs,
  countCorrectAnswers
}

export default connect(null, mapDispatchToProps)(Item);
