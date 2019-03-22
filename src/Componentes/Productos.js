import React, { Component } from "react";
import Cards from "./Cards.js";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";
import NavBar from './NavBar'
class Productos extends Component {
	constructor() {
		super();
		
	}
	render() {

		return (
			<Container fluid>
				<Cards/>
			</Container>
		);
	}
}


export default Productos;