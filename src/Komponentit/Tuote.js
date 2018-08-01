import React, {Component} from 'react';

class Tuote extends Component{

render(){
    return(
        <li className="Tuote">
        {this.props.todo.tuotteennimi}<br/>
        {this.props.todo.määrä}
        </li>
    );
}
}

export default Tuote;