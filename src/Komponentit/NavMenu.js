import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class NavMenu extends Component {
  render() {
    return (

        <div>
          <Link to="/">Lisää tuotteita</Link>
          <Link to="/ostoslista">Ostoslista</Link>
          <Link to="/kori">Kori</Link>
         
        </div>

    );
  }
}

export default NavMenu;
