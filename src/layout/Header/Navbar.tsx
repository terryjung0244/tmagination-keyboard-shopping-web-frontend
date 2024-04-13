import React from 'react';
import * as Styles from './Navbar.styled';
import { Navbar as NavbarTop, Nav } from 'react-bootstrap'; //
import Logo from './Logo';
import Cart from './Cart';
import control from './../../assets/control.png';

const Navbar = () => {
  return (
    <Styles.Navbar>
      <NavbarTop className="navbarTop" sticky="top" expand="md">
        <NavbarTop.Brand className="navbarTop-brand">
          <Logo />
        </NavbarTop.Brand>
        <NavbarTop.Toggle className="navbarTop-toggle" />
        <NavbarTop.Collapse className="navbarCollapse">
          <Nav className="navbarCollapse-nav">
            <Nav.Link className="navbarCollapse-nav-navLink" href="/dashboard">
              <img src={control} alt="control" className="dashboardImage" />
            </Nav.Link>
            <Nav.Link
              className="navbarCollapse-nav-navLink"
              href="https://www.youtube.com/@tmagination6083"
              target="_blank"
            >
              Youtube
            </Nav.Link>
            <Nav.Link className="navbarCollapse-nav-navLink" href="/allproducts">
              All Products
            </Nav.Link>
            <Nav.Link className="navbarCollapse-nav-navLink" href="/keyboards">
              Keyboards
            </Nav.Link>
            <Nav.Link className="navbarCollapse-nav-navLink" href="/switches">
              Switches
            </Nav.Link>
            <Nav.Link className="navbarCollapse-nav-navLink" href="/keycaps">
              Keycaps
            </Nav.Link>
            <Nav.Link className="navbarCollapse-nav-navLink" href="/cart">
              <Cart />
            </Nav.Link>
          </Nav>
        </NavbarTop.Collapse>
      </NavbarTop>
    </Styles.Navbar>
  );
};

export default Navbar;
