import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import NavBar from './NavBar.js';
import fire from '../config/Fire';
export default class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      nombre: "",
      apellido: "",
      username: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.createUser=this.createUser.bind(this);
  }

  createUser(){
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u=>{
        console.log("usuario creado");
      })
      .catch(function(error){
        var errorCode = error.Code;
        var errorMessage = error.Message;
        if (errorCode=="auth/weak-password") {
          alert("The password is weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
    console.log(e.target.value);
  }



  render() {
    return (
      <div>
        <NavBar></NavBar>
            <br></br><br></br>
        <div style ={{border: 'thin', display: 'flex', justifyContent: 'center'}}>
          <Form>
            <FormGroup row>
              <Label for="Nombre" sm={4}>
                Nombre
              </Label>
              <Col sm={8}>
                <Input
                  type="nombre"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  value={this.state.nombre}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Apellido" sm={4}>
                Apellido
              </Label>
              <Col sm={8}>
                <Input
                  type="apellido"
                  name="apellido"
                  id="apellido"
                  placeholder="Ingrese su Apellido"
                  value={this.state.apellido}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Correo" sm={4}>
                Correo
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Ingrese su Correo"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={4}>
                Contraseña
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
    
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 0 }}>
                <Button type="submit" onClick={this.createUser}>Confirmar</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
