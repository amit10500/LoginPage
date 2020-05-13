import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={LoginPage} />
        <Route path="/landingpage" exact component={LandingPage} />
      </div>
    </Router>

  )
}

export default App