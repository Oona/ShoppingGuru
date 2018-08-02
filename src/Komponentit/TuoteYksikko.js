import React, { Component } from 'react';
import Tuote from './Tuote';
import './tyyli.css';

class Tuoteyksikko extends Component {

    render() {
        let todoItems;
        console.log(this.props.todos);
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <Tuote todo ={todo} poista={this.props.poisto}  key={todo.tuotteennimi} />
                );
            });
        }
        return (
            <div className="TuoteYksikko">
                <h1>Ostoslista</h1>
                <div className="lines"></div>
                <ul>
                    {todoItems}</ul>

            </div>
        );
    }
}

export default Tuoteyksikko;