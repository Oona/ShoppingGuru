import React, { Component } from 'react';
import Tuote from './Tuote';
//import './TuoteList.css';
import './TuoteYksikko.css';

class Tuoteyksikko extends Component {

    render() {
        let todoItems;
        console.log(this.props.todos);
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <li className="Lista"><Tuote key={todo.tuotteennimi} todo={todo} /></li>
                );
            });
        }
        return (
            <div className="TuoteYksikko">
                <h1>Ostoslista</h1>
                <div class="lines"></div>
                <ul>
                    {todoItems}</ul>

            </div>
        );
    }
}

export default Tuoteyksikko;