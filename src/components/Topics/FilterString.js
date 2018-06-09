import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jeniffer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredArray: []
    };
  }
  changer(val) {
    this.setState({ userInput: val });
  }
  filter(userInput) {
    var newArray = [];
    for (var i = 0; i < this.state.unfilteredArray.length; i++) {
      if (this.state.unfilteredArray[i].startsWith(userInput)) {
        newArray.push(this.state.unfilteredArray[i]);
      }
    }
    this.setState({ fitleredArray: newArray });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unfilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.changer(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filter(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.fitleredArray, null, 10)}
        </span>
      </div>
    );
  }
}
