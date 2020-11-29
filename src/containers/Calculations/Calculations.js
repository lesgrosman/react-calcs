import React, { Component } from "react";
import classes from "./Calculations.module.css";
import Counter from "../../components/Counter/Counter";
import Item from "../../components/Item/Item";
import Timer from "../../components/Timer/Timer";
// import FinishModal from "../../components/FinishModal/FinishModal";
import Hoc from "../../hoc/Hoc";

function createGroup(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr.map((i) => {
    return {
      numA: Math.round(Math.random() * 10),
      numB: Math.round(Math.random() * 10),
      correctAnswer: null,
      action: randomAction(),
      inputValue: "",
      touched: false,
      status: "",
      id: i,
      disabled: false
    };
  });
}

function randomAction() {
  const random = Math.floor(Math.random() * Math.floor(3));
  switch (random) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "x";
    default:
      return null;
  }
}

///////////////////////////////////////////////////

export default class Calculations extends Component {
  state = {
    quiz: createGroup(this.props.num),
    done: 0
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
    console.log(quiz[id].inputValue);
    const condition =
      quiz[id].inputValue === quiz[id].correctAnswer
        ? "success"
        : quiz[id].inputValue === ""
        ? "error"
        : "error";

    this.setState(({ quiz }) => {
      const old = quiz[id];
      const newItem = {
        ...old,
        status: condition,
        disabled: true
      };
      const newQuiz = [...quiz.slice(0, id), newItem, ...quiz.slice(id + 1)];
      return {
        quiz: newQuiz,
        done: this.state.done + 1
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
    for (let i = 0; i < this.props.num; i++) {
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
    const { done } = this.state;
    const items = this.renderItems();
    return (
      <div>
        <div className={classes.Calculations}>{items}</div>
        <Counter allNums={this.props.num} done={done} quiz={this.state.quiz} />
        <Timer done={done} quiz={this.state.quiz} numAll={this.props.num} />
        { done === this.props.num ? (
        <Hoc quiz={this.state.quiz} numAll={this.props.num} />
      ) : null}
      </div>

    );
  }
}
