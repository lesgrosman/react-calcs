import React, { Component } from "react";
import classes from "./Item.module.css";

class Item extends Component {
  
  render() {
    const cls = [classes.Item];

    // if (this.state.touched) {
    //   this.isAnswerCorrect(this.state.inputValue, cls);
    // }

    if (this.props.touched && this.props.status !== "") {
      if (this.props.status === "success") {
        cls.push(classes.success);
      } else {
        cls.push(classes.error);
      }
    }

    return (
      <div className={cls.join(" ")}>
        {this.props.numA} {this.props.action} {this.props.numB} =
        <form id={this.props.id} onSubmit={this.props.onSubmit}>
          <input
            disabled={this.props.disabled}
            id={this.props.id}
            onChange={this.props.onChange}
          />
        </form>
      </div>
    );
  }
}

export default Item;
