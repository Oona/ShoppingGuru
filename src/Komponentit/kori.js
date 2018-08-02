import React, { Component } from "react";
import "./tyyli.css";

class Kori extends Component {
  poista = () => {
    console.log(this.props.todo.ostoid);
    this.props.poista(this.props.todo.ostoid);
  };
  kori = () => {
    console.log(this.props.todo.ostoid);
    this.props.kori(this.props.todo.ostoid);
  };
  render() {
    switch (this.props.todo.korissa) {
      case true:
        return (
          <li className="Tuote">
            {this.props.todo.määrä}
            {this.props.todo.tuotteennimi}

            <button
              className="buttonDelete"
              type="button"
              onClick={this.poista}
            >
              Poista
            </button>
            {/* <button className="buttonDelete" type="button" onClick={this.kori}>
              Koriin
            </button> */}
          </li>
        );
      default:
        return null;
    }
  }
}

export default Kori;
