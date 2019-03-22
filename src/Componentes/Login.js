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
import fire from '../config/Fire';
import NavBar from './NavBar.js';
import firebase from 'firebase';
import Footer from './Footer';
export default class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.login =this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.signOutUser = this.signOutUser.bind(this);

    this.state={
      email:"",
      password: ""
    };
  }

  signOutUser = async () => {
    try {
      await fire.auth().signOut();
      console.log("Logged Out");
    } catch (e) {
      console.log(e);
    }
  }
  handleGoogleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    fire
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      });
  }


  login(e){
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email,this.state.password)
      .then(u=>{
        console.log("success");
      })
      .catch(error =>{
        console.log("nada");
      });
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
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
              <Label for="Correo" sm={4}>
                Correo
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="email"
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
                <Button type="submit" onClick={this.login} >Confirmar</Button>
                {'             '}
                <Button type="submit" onClick={this.handleGoogleLogin}  color="danger">Entrar con Google</Button>

              </Col>
            </FormGroup>
          </Form>
        </div>
        <Footer><button onClick={this.signOutUser}>Log out</button></Footer>
      </div>
    );
  }
}
