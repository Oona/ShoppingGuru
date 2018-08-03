import React, { Component } from "react";
import Tuote from "./Kori";
import "./tyyli.css";

class Koriyksikko extends Component {
  render() {
    let todoItems;
    console.log(this.props.todos);
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <Tuote
            todo={todo}
            // /*update={this.props.update}*/ kori={this.props.kori}
            poista={this.props.poisto}
            key={todo.ostoid}
          />
        );
      });
    }
    return (
      <div className="TuoteYksikko">
        <h1>Kori</h1>
        <tr>
        <td>&nbsp;</td>
        </tr>
        <div className="lines" />
        <table align="center">{todoItems}</table>
      </div>
    );
  }
}

export default Koriyksikko;
