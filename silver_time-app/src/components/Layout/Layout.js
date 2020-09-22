import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Layout.css";
import CarFeatures from "../Carfeatures/CarFeatures";
import Homepage from "../Homepage/Homepage";
import PageNav from "../PageNav/PageNav";

const Layout = () => (

  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Kontakt</Link>
        </li>
        <li>
          <Link to="/CarFeatures">Car Features</Link>
        </li>
      </ul>
    </nav>
    <div className="pageNav"><PageNav page={1} lastPage={53} /></div>
    <div className="content">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/contacts">
          <p>Kontakt!</p>
        </Route>
        <Route path="/CarFeatures">
          <div>
            <CarFeatures />
          </div>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>

  </div >
);

export default Layout;
