import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  changer(val) {
    this.setState({ userInput: val });
  }
  palindromer(userInput) {
    var result;
    if (
      userInput
        .split("")
        .reverse()
        .join("") === userInput
    ) {
      result = "true";
    } else {
      result = "false";
    }
    this.setState({ palindrome: result });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.changer(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.palindromer(this.state.userInput)}
        >
          Check
        </button>
        <span className="resultsBox palindromePB">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}
