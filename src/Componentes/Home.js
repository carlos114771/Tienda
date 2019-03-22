import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./NavBar.js";
import Carousel from "./Carousel.js";
import Cards from "./Cards.js";
import Footer from "./Footer";
import SearchField from "react-search-field";
import fire from '../config/Fire';
class Home extends Component {
  constructor(props) {
    super(props);
    this.signOutUser = this.signOutUser.bind(this);
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
        <SearchField placeholder="Search" />
        <br />
        <Carousel />
        <br />
        <Footer><button onClick={this.signOutUser}>Log out</button> </Footer>
      </div>
    );
  }
}

export default Home;
