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
export default class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
            <br></br><br></br>
        <div style ={{border: 'thin', display: 'flex', justifyContent: 'center'}}>
          <Form>
         
      
            <FormGroup row>
              <Label for="Correo" sm={4}>
                Correo
              </Label>
              <Col sm={8}>
                <Input
                  type="correo"
                  name="correo"
                  id="correo"
                  placeholder="Ingrese su Correo"
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
                />
              </Col>
            </FormGroup>
          
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 0 }}>
                <Button>Confirmar</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
