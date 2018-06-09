import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  changer1(val) {
    this.setState({number1: parseInt(val, 10)})
  }
  changer2(val) {
    this.setState({number2: parseInt(val, 10)})
  }
  sumer(num1, num2) {
    console.log(num1, num2)
    this.setState({sum: num1+num2})
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
        className="inputLine"
        onChange={e => this.changer1(e.target.value)}
        />
        <input
        className="inputLine"
        onChange={e => this.changer2(e.target.value)}
        />
        <button
        className="confirmationButton"
        onClick={() => this.sumer(this.state.number1, this.state.number2)}
        >
        Add
        </button>
        <span className="resultsBox">
        Sum: {this.state.sum}
        </span>
      </div>
    )
  }
}
