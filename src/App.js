import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TuoteForm from "./Komponentit/TuoteForm";
import NavMenu from "./Komponentit/NavMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import lisaa from "./Komponentit/lisaa";
import ostoslista from "./Komponentit/ostoslista";
import kori from "./Komponentit/kori";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavMenu />
          <h1 className="App-title">Welcome to React</h1>
        </header>
 
        <Switch>
            <Route exact path="/Oona" component={lisaa} />
            <Route exact path="/ostosl" component={ostoslista} />
            <Route exact path="/kori" component={kori} />
           
          </Switch>
  
      </div>
      </Router>
    );
  }
}

export default App;
