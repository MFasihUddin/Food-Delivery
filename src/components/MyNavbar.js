import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand as={NavLink} to="/">
        GoFood
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/login">
          Login
        </Nav.Link>
       
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
