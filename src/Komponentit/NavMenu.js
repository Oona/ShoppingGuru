import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './tyyli.css';
import guru from './guru.jpg';

class NavMenu extends Component {
  render() {
    return (

        <div>
          <h1 className="ShoppingGuru">ShoppinGuru</h1>
          <img className="guru" src={guru} alt="guru"/> 
          <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
          </div>
          <ul className="nav navbar-nav">
          <li><a href="/ostoslista">Ostoslista</a></li>
        <li><a href="/kori">Kori</a></li>
        </ul>
        </div>
        </nav>
        </div>

    );
  }
}

export default NavMenu;
