import React, {Component} from 'react';
import './tyyli.css';


class Tuote extends Component{

    

poista = () => {
    console.log(this.props.todo.ostoid);
    this.props.poista(this.props.todo.ostoid);
}

render(){
    return(
        <li className="Tuote">
        {this.props.todo.määrä}
        {this.props.todo.tuotteennimi}
        <button className="buttonDelete" type="button" onClick={this.poista}>Poista</button>
        </li>
    );
}
}

export default Tuote;