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
        <div className="lines" />
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

export default Koriyksikko;
