import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Col,
  Row
} from "reactstrap";
import "./Cards.css";

import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import card4 from "./card4.jpg";
import card5 from "./card5.jpg";
import card6 from "./card6.jpg";
import card7 from "./card7.jpg";
import card8 from "./card8.jpg";
import card9 from "./card9.jpg";
import NavBar from "./NavBar.js";

class CardsRelojes extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Card>
          <CardImg top width ="100%" src={this.props.relojes.picture}/>
          <CardBody>
            <CardTitle>{this.props.relojes.title}</CardTitle>
            <CardSubtitle>{this.props.relojes.subtitle}</CardSubtitle>
            <CardText>{this.props.relojes.text}</CardText>
            <Button onClick={Compra}>Comprar</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

function Compra() {
  alert("Se agrego al Carrito");
}

export default CardsRelojes;
