
import React, { Component } from 'react';
import Navbar from "./NavBar.js";
import Home from "./Home";
import Login from './Login';
import './App.css';
import SignIn from "./SignIn";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Content from './Content';
import fire from '../config/Fire';
import * as firebase from 'firebase';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state={user:null};
  }
  logout(){}

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged(user =>{
      console.log(user);
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });

  }


  render() {
    const { children } = this.props;
    return (
      
    <div className="App">
    <Content body={children} />
        {/*{this.state.user? <Home/>: <Login/>}*/}
    </div>
    );
  }
}

export default App;
//<Link to={"/SignIn.js"}>FUCK</Link>