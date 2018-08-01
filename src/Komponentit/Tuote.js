import React, {Component} from 'react';


class Tuote extends Component{

    

poista = () => {
    console.log(this.props.todo.ostoid);
    this.props.poisto(this.props.todo.ostoid);
}

render(){
    return(
        <li className="Tuote">
        {this.props.todo.tuotteennimi}<br/>
        {this.props.todo.määrä}
        <button type="button" onClick={this.poista}>Poista</button>
        </li>
    );
}
}

export default Tuote;