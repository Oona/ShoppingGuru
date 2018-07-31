import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import lisaa from "./lisaa";
import ostoslista from "./ostoslista";
import kori from "./kori";
import NotFound from "./NotFound";

class NavMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Lisää tuotteita</Link>
          <Link to="/ostosl">Ostoslista</Link>
          <Link to="/kori">Kori</Link>
          <Link to="/eiole">Error</Link>
          <switch>
            <Route exact path="/" component={lisaa} />
            <Route exact path="/ostosl" component={ostoslista} />
            <Route exact path="/kori" component={kori} />
            <Route exact path="/eiole" component={NotFound} />
          </switch>
        </div>
      </Router>
    );
  }
}
