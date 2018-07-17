import { Navbar, MenuItem, NavDropdown, NavItem, Nav } from "react-bootstrap";

import React from "react";
const NavigationBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Jamie Keith</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        About Me
      </NavItem>
      <NavItem eventKey={2} href="#">
        Portfolio
      </NavItem>
      <NavItem eventKey={3} href="#">
        Contact Me
      </NavItem>
    </Nav>
  </Navbar>
);
export default NavigationBar;
