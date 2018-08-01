import React, { Component } from 'react';
import Tuote from './Tuote';
//import './TuoteList.css';
import './TuoteYksikko.css';

class Tuoteyksikko extends Component {

<<<<<<< HEAD
render(){
    let todoItems;
    console.log(this.props.todos);
    if(this.props.todos){
        todoItems=this.props.todos.map(todo => {
            return(
                <Tuote todo ={todo} poista={this.props.poisto}  key={todo.tuotteennimi} />
            );
        }
    );
=======
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
>>>>>>> c32e86baee6f4d163e380e627dc77369bf25279d
    }
}

export default Tuoteyksikko;