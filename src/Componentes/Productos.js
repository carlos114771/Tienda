import React, { Component } from "react";
import Cards from "./Cards.js";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Footer from './Footer';
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import card4 from "./card4.jpg";
import card5 from "./card5.jpg";
import card6 from "./card6.jpg";
import card7 from "./card7.jpg";
import card8 from "./card8.jpg";
import card9 from "./card9.jpg";
class Productos extends Component {
  constructor() {
    super();
    this.state = {
      reloj: [
        {
          title: "Fossil",
          subtitle: "$ 299.99",
          text: "Men Analogue Watch",
          picture: card1
        },
        {
          title: "G-Shock Black And Gold Watch",
          subtitle: "$ 150.00",
          text: "With precision accuracy and an array of special features",
          picture: card2
        },
        {
          title: "AU1040-08E Eco Drive Watch",
          subtitle: "$ 131.25",
          text: "Timeless appeal and clean design",
          picture: card3
        },
        {
          title: "TITAN Blue Dial Chronograph Watch For Men - 9234WL02",
          subtitle: "$ 1,200.00",
          text: "Titan blue dial chronograph watch for men",
          picture: card4
        },
        {
          title: "Astro Blue",
          subtitle: "$ 195.00",
          text: "Silver Hands And Markers / Black Second Hand",
          picture: card5
        },
        {
          title: "Chronograph Men's Watch 5905",
          subtitle: "$ 199.00",
          text:
            "Stainless steel case with a stainless steel bracelet wrapped in black silicone",
          picture: card6
        },
        {
          title: "Nixon Time Teller reloj todo negro y oro rosa",
          subtitle: "$ 100.00",
          text:
            " Simple pero versátil, este reloj analógico de tamaño medio se hace con una banda de color egro mate de acero inoxidable y la corona que es acentuado con índices de oro rosa y las manos moldeados personalizado",
          picture: card7
        },
        {
          title: "Movado ‘Large Bold’ Bracelet Watch 42mm",
          subtitle: "$ 595.00",
          text: "Simple pero versátil, este reloj analógico",
          picture: card8
        },
        {
          title: "Vince Camuto",
          subtitle: "$ 195.00",
          text: "Men's 2 Zone Bracelet Watch, 45mm",
          picture: card9
        }
      ]
    };
  }
  render() {
    let cards = this.state.reloj.map(relojes => {
      return (
        <Col sm="4">
          <Cards relojes={relojes} />
          <br />
        </Col>
      );
    });
    return (
      <div>
		  <NavBar/>
        <div>
          <Container fluid>
            <Row>{cards}</Row>
          </Container>
        </div>
		<Footer/>
      </div>
    );
  }
}

export default Productos;
