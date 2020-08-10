import React from "react";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <div className="mainAAAA">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
