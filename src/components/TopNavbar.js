import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const TopNavbar = props => (
  <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Софт Технолоджи  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">

        {props.appState.logged_in ? (
          <Nav.Link onClick={props.logOutUser} href="/logout">
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link href="/users/login">Войти</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
