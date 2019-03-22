import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";
//import "../App.css";

class Cart extends Component {
	render() {
		return (
			<div>
				<Card>
					<CardImg
						className='card-img'
						top
						width='100%'
						src={this.props.item.image}
						alt='Card image cap'
					/>
					<CardBody>
						<CardTitle>{this.props.item.name}</CardTitle>
						<CardSubtitle>Precio: ${this.props.item.precio}</CardSubtitle>
						<CardText>{this.props.item.description}</CardText>
						<Button
							className='button'
							onClick={() => this.props.remove(this.props.item.id)}
						>
							Remover del Carrito
						</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Cart;