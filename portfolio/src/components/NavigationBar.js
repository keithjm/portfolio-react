import { Navbar, MenuItem, NavDropdown, NavItem, Nav } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

import React from "react";
const NavigationBar = props => (
  <div>
    {/* <Link to="/about">About Me</Link> */}

    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Jamie Keith</a>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav pullRight>
        <NavItem eventKey={1} href="about">
          About Me
          {/* <Link to="/about">About Me</Link> */}
        </NavItem>
        <NavItem eventKey={2} href="projects">
          Portfolio
        </NavItem>
        <NavItem eventKey={3} href="contact">
          Contact Me
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);
export default NavigationBar;
