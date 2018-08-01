import React, {Component} from 'react';
import Tuote from './Tuote';

class Tuoteyksikko extends Component{

render(){
    let todoItems;
    console.log(this.props.todos);
    if(this.props.todos){
        todoItems=this.props.todos.map(todo => {
            return(
                <Tuote todo ={todo} poista ={this.props.poisto}  key={todo.tuotteennimi} />
            );
        }
    );
    }
    return(
        <div className="TuoteYksikko">
        <p>Ostoslista</p>
        {todoItems}
        </div>
    );
}
}

export default Tuoteyksikko;