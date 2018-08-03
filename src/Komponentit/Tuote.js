import React, { Component } from "react";
import "./tyyli.css";

class Tuote extends Component {
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
      case false:
        return (
         <div>
        <tr className="Tuote">
            <button className="buttonBasket" type="button" onClick={this.kori}>Koriin</button>
        <td>&nbsp;</td>
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

export default Tuote;
