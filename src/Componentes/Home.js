import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./NavBar.js";
import Carousel from "./Carousel.js";

class Home extends Component {
  render() {
    
    return (
      <div>
        <Navbar />
        <Carousel/>
        
      </div>
    );
  }
}

export default Home;
