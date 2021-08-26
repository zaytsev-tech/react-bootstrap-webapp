import React from 'react';
import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import Navibar from './Components/navbar';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {Home} from "./Home";
import {About} from "./About";
import {Users} from "./Users";

function App() {
  return (
    <>
    <Router>
      <Navibar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
