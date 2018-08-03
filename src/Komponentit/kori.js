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
          <div>
          <tr className="Tuote">
            <button className="buttonDelete" type="button" onClick={this.poista}>Poista</button>
            <td>&nbsp;</td>
            <td className="boldMäärä">{this.props.todo.määrä}</td>
            <td>&nbsp;</td>
            <td>{this.props.todo.tuotteennimi}</td>
          </tr>
          <tr>
          <td>&nbsp;</td>
          </tr>
          </div>
        );
      default:
        return null;
    }
  }
}

export default Kori;
