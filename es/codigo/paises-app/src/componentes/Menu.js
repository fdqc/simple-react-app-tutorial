import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Menu extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer href="/" to="/">
          <Navbar.Brand>
            Paises-React
          </Navbar.Brand>
        </LinkContainer>
        <Nav>
        <LinkContainer href="/" to="/">
            <Nav.Link>
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer href="/paises" to="/paises">
            <Nav.Link>
              Listado de Paises
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }

}

export default Menu;
