import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./NavBar.js";
import Carousel from "./Carousel.js";
import Cards from "./Cards.js";

class Home extends Component {
  render() {
    
    return (
      <div>
        <Navbar />
        <br/>
        <Carousel/>
        <br/>
        <Cards/>
        
        
      </div>
    );
  }
}

export default Home;
