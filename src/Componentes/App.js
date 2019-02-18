
import React, { Component } from 'react';
import Navbar from "./NavBar.js";
import Home from "./Home";
import './App.css';
import SignIn from "./SignIn";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Content from './Content';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Content body={children} />
      </div>
    );
  }
}

export default App;
//<Link to={"/SignIn.js"}>FUCK</Link>