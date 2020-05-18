import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from "./LoginPage";
import TelExtensionPage from "./TelExtensionPage";
import BusinessPage from "./BusinessPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/telextension" exact component={TelExtensionPage} />
          <Route path="/business" exact component={BusinessPage} />
        </Switch>

      </div>
    </Router>

  )
}

export default App