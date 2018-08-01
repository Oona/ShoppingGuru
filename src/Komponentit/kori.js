import React, { Component } from "react";

class Kori extends Component {
  state = { tuote: "" };
  tuoteTallennus = e => {
    this.setState({ tuote: e.target.value });
  };
  maaraTallennus = e => {
    this.setState({ maara: e.target.value });
  };
  laheta = e => {
    e.preventDefault();
    this.props.tallennaTuote(this.state);
    this.setState({ tuote: "", maara: "" });
  };
  render() {
    return (
      <div>
      <p>
        Korissa olevat tuotteet.
        </p>
      </div>
    );
  }
}

export default Kori;
