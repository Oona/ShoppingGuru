import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class NavMenu extends Component {
  render() {
    return (

        <div>
          <Link to="/Oona">Lisää tuotteita</Link>
          <Link to="/ostosl">Ostoslista</Link>
          <Link to="/kori">Kori</Link>
          <Link to="/eiole">Error</Link>
         
        </div>

    );
  }
}

export default NavMenu;
