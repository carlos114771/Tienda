import React from "react";
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
const Example = props => {
 
  return (
    <div>
      <Container>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src={card1} alt="Card image cap" />
              <CardBody>
                <CardTitle>Fossil</CardTitle>
                <CardSubtitle>$ 299.99</CardSubtitle>
                <CardText>Men Analogue Watch</CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src={card2} alt="Card image cap" />
              <CardBody>
                <CardTitle>G-Shock Black And Gold Watch</CardTitle>
                <CardSubtitle>$ 150.00</CardSubtitle>
                <CardText>
                  With precision accuracy and an array of special features
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg top width="" src={card3} alt="Card image cap" />
              <CardBody>
                <CardTitle>AU1040-08E Eco Drive Watch</CardTitle>
                <CardSubtitle>$ 131.25</CardSubtitle>
                <CardText>
                  Timeless appeal and clean design
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={card4}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>TITAN Blue Dial Chronograph Watch For Men - 9234WL02</CardTitle>
                <CardSubtitle>$ 1,200.00</CardSubtitle>
                <CardText>
                  Titan blue dial chronograph watch for men
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={card5}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Astro Blue</CardTitle>
                <CardSubtitle>$ 195.00</CardSubtitle>
                <CardText>
                Silver Hands And Markers / Black Second Hand
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={card6}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Chronograph Men's Watch 5905</CardTitle>
                <CardSubtitle>$ 199.00</CardSubtitle>
                <CardText>
                Stainless steel case with a stainless steel bracelet wrapped in black silicone.
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={card7}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Nixon Time Teller reloj todo negro y oro rosa</CardTitle>
                <CardSubtitle>$ 100.00</CardSubtitle>
                <CardText>
                Simple pero versátil, este reloj analógico de tamaño medio se hace con una banda de color 
                negro mate de acero inoxidable y la corona que es acentuado con índices de 
                oro rosa y las manos moldeados personalizado.
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={card8}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Movado ‘Large Bold’ Bracelet Watch 42mm</CardTitle>
                <CardSubtitle>$ 595.00</CardSubtitle>
                <CardText>
                Simple pero versátil, este reloj analógico
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width=""
                src={card9}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Vince Camuto</CardTitle>
                <CardSubtitle>$ 195.00</CardSubtitle>
                <CardText>
                Men's 2 Zone Bracelet Watch, 45mm
                </CardText>
                <Button onClick={Compra}>Agregar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function Compra(){
  alert("Se agrego al Carrito");
}

export default Example;

