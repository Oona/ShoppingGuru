import React, {Component} from 'react';
import Tuoteyksikko from './TuoteYksikko';
import $ from 'jquery';
import './TuoteList.css'

const apiurl ='/api/ostoslista';

class TuoteList extends Component{
constructor(){
    super();
    this.state = {
        todos:[]
    }
}

getToDos(){
    $.ajax({
        url: apiurl,
        dataType: 'json',
        cache: false,
        success: function(data){
            this.setState({todos:data}, function(){
                console.log(this.state);

            });
        }.bind(this),
        error: function(xhr, status,err)
        {
            console.log(err)
        }
    });
}

componentWillMount(){
    this.getToDos();
}

componentDidMount(){
    this.getToDos();
}

render(){
    return(
        <div className="TuoteList">
        <Tuoteyksikko todos={this.state.todos}/>
        </div>
    );
}
}

export default TuoteList;