import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        { name: "Jimmy Joe", title: "HackOr", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  changer(val) {
    this.setState({ userInput: val });
  }
  filterer(userInput) {
    var filtered = this.state.unfilteredArray.filter(
      (e, i, arr) => userInput in e
    );
    this.setState({ filteredArray: filtered });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.changer(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterer(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
