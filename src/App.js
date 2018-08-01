import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TuoteForm from "./Komponentit/TuoteForm";
import NavMenu from "./Komponentit/NavMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavMenu />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <TuoteForm />
        </p>
      </div>
    );
  }
}

export default App;
