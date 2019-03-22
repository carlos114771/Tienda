import React, { Component } from "react";
import Navbar from "./NavBar";
import fire from "../config/Fire";

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.signOutUser=this.signOutUser.bind(this);
    }
    signOutUser = async () => {
        try {
          await fire.auth().signOut();
          console.log("Logged Out");
        } catch (e) {
          console.log(e);
        }
      };

  render() {
    return (
      <div>
        <Navbar />
        <button onClick={this.signOutUser}>Log out</button>
      </div>
    );
  }
}
