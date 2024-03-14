/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './Navbar.styled';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarTop from 'react-bootstrap/Navbar';
import Logo from './Logo';

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
            </Nav>
          </NavbarTop.Collapse>
        </Container>
      </NavbarTop>
    </Styles.Navbar>
  );
};
// bg="dark" data-bs-theme="dark"
export default Navbar;

{
  /* <div>
<Logo />
<Link to="/dashboard">Dashboard</Link>
<div className="">
  <Link to="/allproducts">All Products</Link>
  <Link to="/keyboards">Keyboards</Link>
  <Link to="/switches">Switches</Link>
  <Link to="/keycaps">Keycaps</Link>
  <Link to="/accessories">accessories</Link>
</div>
</div> */
}
