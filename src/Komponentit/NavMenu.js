import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tyyli.css";
import guru from "./guru.jpg";

class NavMenu extends Component {
  render() {
    return (
      <div>
        <h1 className="ShoppingGuru">ShoppinGuru</h1>
        <img className="guru" src={guru} alt="guru" />
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header" />
            <ul className="nav navbar-nav">
              <li>
                <Link to="/ostoslista">Ostoslista</Link>
              </li>
              <li>
                <Link to="/kori">Kori</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavMenu;
