import React, { Component } from "react";
import Tuote from "./Tuote";
import "./tyyli.css";

class Tuoteyksikko extends Component {
  render() {
    let todoItems;
    console.log(this.props.todos);
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
            <div className="TuoteYksikko">
                <div className="lines"></div>
                <table align="center">
                    {todoItems}</table>

          <Tuote
            todo={todo}
            /*update={this.props.update}*/ kori={this.props.kori}
            poista={this.props.poisto}
            key={todo.ostoid}
            />
            </div>
        );
      });
    }
    return (
      <div className="TuoteYksikko">
        <h1>Kostolista</h1>
        <tr>
        <td>&nbsp;</td>
        </tr>
        <div className="lines" />
        <table align="center">{todoItems}</table>
      </div>
    );
  }
}

export default Tuoteyksikko;
