/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './Navbar.styled';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarTop from 'react-bootstrap/Navbar';
import Logo from './Logo';
import Cart from './Cart';

const Navbar = () => {
  return (
    <Styles.Navbar>
      <NavbarTop expand="lg" className="bg-body-tertiary">
        <Container className="navbarContainer">
          <NavbarTop.Brand>
            <Logo />
          </NavbarTop.Brand>
          <NavbarTop.Toggle aria-controls="basic-navbar-nav" />
          <NavbarTop.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbarFont" href="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link className="navbarFont" href="/allproducts">
                All Products
              </Nav.Link>
              <Nav.Link className="navbarFont" href="/keyboards">
                Keyboards
              </Nav.Link>
              <Nav.Link className="navbarFont" href="/switches">
                Switches
              </Nav.Link>
              <Nav.Link className="navbarFont" href="/keycaps">
                Keycaps
              </Nav.Link>
              <Nav.Link className="navbarFont" href="/cart">
                <Cart />
              </Nav.Link>
            </Nav>
          </NavbarTop.Collapse>
        </Container>
      </NavbarTop>
    </Styles.Navbar>
  );
};

export default Navbar;
