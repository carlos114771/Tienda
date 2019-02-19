import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./NavBar.js";
import Carousel from "./Carousel.js";
import Cards from "./Cards.js";
import SearchField from 'react-search-field';
class Home extends Component {
  render() {
    
    return (
      <div>
        <Navbar />
        <SearchField placeholder='Search'/>
        <br/>
        <Carousel/>
        <br/>
        
        
      </div>
    );
  }
}

export default Home;
