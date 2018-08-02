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
          <Tuote
            todo={todo}
            /*update={this.props.update}*/ kori={this.props.kori}
            poista={this.props.poisto}
            key={todo.ostoid}
          />
        );
      });
    }
    return (
      <div className="TuoteYksikko">
        <h1>Ostoslista</h1>
        <div className="lines" />
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

export default Tuoteyksikko;
