import React, {Component} from 'react';
import './tyyli.css';


class Tuote extends Component{

    

poista = () => {
    console.log(this.props.todo.ostoid);
    this.props.poista(this.props.todo.ostoid);
}

render(){
    return(
        <tr className="Tuote">
        <td className="boldMäärä">{this.props.todo.määrä}</td>
        <td>&nbsp;</td>
        <td>{this.props.todo.tuotteennimi}</td>
        <td>&nbsp;</td>
        <button className="buttonDelete" type="button" onClick={this.poista}>Poista</button>
        </tr>
    );
}
}

export default Tuote;