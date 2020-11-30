import React, { Component } from "react";
import classes from "./Calculations.module.css";
import Counter from "../../components/Counter/Counter";
import Item from "../../components/Item/Item";
import Timer from "../../components/Timer/Timer";
import createGroup from '../../createCalcs/createCalcs'
import Hoc from "../../hoc/Hoc";
import {connect} from 'react-redux'
import {countFinishedCalcs} from '../../store/actions/actions'


///////////////////////////////////////////////////

class Calculations extends Component {
  state = {
    quiz: createGroup(this.props.numOfCalcs)
  };

  componentDidMount() {
    this.setCorrectAnswer();
  }

  getId(event) {
    return +event.target.getAttribute("id");
  }

  onChangeHandler = (event) => {
    const id = this.getId(event);

    this.setState(({ quiz }) => {
      const old = quiz[id];
      const newItem = {
        ...old,
        inputValue: +event.target.value,
        touched: true
      };
      const newQuiz = [...quiz.slice(0, id), newItem, ...quiz.slice(id + 1)];
      return {
        quiz: newQuiz
      };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const id = this.getId(event);
    const { quiz } = this.state;
    const condition =
      quiz[id].inputValue === quiz[id].correctAnswer
        ? "success"
        : quiz[id].inputValue === ""
        ? "error"
        : "error";

    this.props.countFinishedCalcs()

    this.setState(({ quiz }) => {
      const old = quiz[id];
      const newItem = {
        ...old,
        status: condition,
        disabled: true
      };
      const newQuiz = [...quiz.slice(0, id), newItem, ...quiz.slice(id + 1)];
      return {
        quiz: newQuiz
      };
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
    const { quiz } = this.state;

    quiz.forEach((item, i) => {
      const { numA, numB, action } = item;

      this.setState(({ quiz }) => {
        const old = item;
        const newItem = {
          ...old,
          correctAnswer: this.setAction(action, numA, numB)
        };
        const newQuiz = [...quiz.slice(0, i), newItem, ...quiz.slice(i + 1)];
        return {
          quiz: newQuiz
        };
      });
    });
  };

  renderItems = () => {
    const arr = [];
    for (let i = 0; i < this.props.numOfCalcs; i++) {
      arr.push(i);
    }
    return arr.map((i) => {
      const {
        numA,
        numB,
        action,
        touched,
        status,
        id,
        disabled
      } = this.state.quiz[i];
      return (
        <Item
          key={i}
          id={id}
          numA={numA}
          numB={numB}
          action={action}
          touched={touched}
          status={status}
          disabled={disabled}
          onSubmit={this.onSubmitHandler}
          onChange={this.onChangeHandler}
          setAction={this.setAction}
          setCorrectAnswer={this.setCorrectAnswer}
        />
      );
    });
  };

  render() {
    console.log('numOfCalcs:', this.props.numOfCalcs)
    console.log('finishedCalcs', this.props.finishedCalcs)
    const { finishedCalcs, numOfCalcs } = this.props;
    const items = this.renderItems();
    return (
      <div>
        <div className={classes.Calculations}>{items}</div>
        <Counter quiz={this.state.quiz} />
        <Timer  quiz={this.state.quiz} />
        {finishedCalcs === numOfCalcs ? (
        <Hoc quiz={this.state.quiz} />
      ) : null}
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    numOfCalcs: state.numOfCalcs,
    finishedCalcs: state.finishedCalcs
  }
}

const mapDispatchToProps = {
  countFinishedCalcs
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculations)
