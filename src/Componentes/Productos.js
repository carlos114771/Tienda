import React, { Component } from "react";
import Cards from "./Cards.js";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";

class Productos extends Component {
	constructor() {
		super();
		
	}
	render() {
		let cards = this.state.ejemplo.items.map(item => {
			return (
				<Col sm='3'>
					<Cards agregar={this.props.addToCarrito} item={item} />
				</Col>
			);
		});
		return (
			<Container fluid>
				<Row>{cards}</Row>
			</Container>
		);
	}
}

const mapdispatchtoprops = dispatch => {
	return {
		addToCarrito: product =>
			dispatch({ type: "Add_To_Cart", producto: product })
	};
};

export default connect(
	null,
	mapdispatchtoprops
)(Productos);