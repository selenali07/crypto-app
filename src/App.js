import './App.css';
import {HashRouter as Router, Switch, Route} from  'react-router-dom'
import {HashRouter} from  'react-router-dom'
import Home from './pages/index';
import Coin from './pages/coin';
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/coin/:id" component={Coin} exact />
        </Switch>
      </Router>
      </HashRouter>

  );
}

export default App;
