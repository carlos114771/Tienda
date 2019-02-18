import React from "react";
import logo from "./logoreloj2.PNG";
import SignIn from "./SignIn.js";
import Login from "./Login.js";
import Search from "./Searchbar.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          style={{ fontFamily: "fantasy", fontSize: "30px" }}
          color="white"
          light
          expand="md"
        >
          <NavbarBrand href="/">
            <img src={logo} height="130" alt="logo" />{" "}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={"/SignIn.js/"}>SignIn &nbsp;</Link>
              </NavItem>
              <NavItem>
                <Link to={"/Cart.js/"}>Cart &nbsp;</Link>
              </NavItem>
              <NavItem>
                <Link to={"/Login.js/"}>LogIn &nbsp;</Link>
              </NavItem>
              <NavItem>
                <Link to={"/Cart.js/"}>About &nbsp;</Link>
              </NavItem>
              <NavItem>
                <Search/>
              </NavItem>
              >
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
