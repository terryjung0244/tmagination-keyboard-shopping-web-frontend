/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import Logo from './Logo';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarTop from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';

const Navbar = () => {
  return (
    <NavbarTop expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarTop.Brand>
          <Logo />
        </NavbarTop.Brand>
        <NavbarTop.Toggle aria-controls="basic-navbar-nav" />
        <NavbarTop.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/allproducts">All Products</Nav.Link>
            <Nav.Link href="/keyboards">Keyboards</Nav.Link>
            <Nav.Link href="/switches">Switches</Nav.Link>
            <Nav.Link href="/keycaps">Keycaps</Nav.Link>
            <Nav.Link href="/accessories">Accessories</Nav.Link>
          </Nav>
        </NavbarTop.Collapse>
      </Container>
    </NavbarTop>
  );
};

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
