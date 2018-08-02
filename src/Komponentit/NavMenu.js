import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './tyyli.css';

class NavMenu extends Component {
  render() {
    return (

        <div>
          <h1 className="ShoppingGuru">ShoppinGuru</h1>
          <Link to="/ostoslista">Ostoslista</Link>
          <Link to="/kori">Kori</Link>
         
        </div>

    );
  }
}

export default NavMenu;
