import React, {Component} from 'react';

class Tuoteyksikko extends Component{

render(){
    let todoItems;
    if(this.props.todos){
        todoItems=this.props.todos.map(todo => {
            return(
                <div>
                <Tuoteyksikko key={todo.ostoid} todo ={todo}/>
                </div>
            );
        });
    }
    return(
        <div className="Tuoteyksikko">
        <p> Ostoslista </p>
        <p>{this.props.tuotteennimi}<br/>
        {this.props.määrä}</p>
        </div>
    );
}
}

export default Tuoteyksikko;