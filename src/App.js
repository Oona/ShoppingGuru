import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavMenu from "./Komponentit/NavMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import kori from "./Komponentit/kori";
import TuoteList from './Komponentit/TuoteList';
import TuoteForm from './Komponentit/TuoteForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavMenu />
          </header>


          <Switch>
            <Route exact path="/" component={TuoteForm} />
            <Route exact path="/ostoslista" component={TuoteList} />
            <Route exact path="/kori" component={kori} />

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
