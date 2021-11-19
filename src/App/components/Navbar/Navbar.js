import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.scss";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Navbar = () => (
  <NavBar bg="primary" variant="dark">
    <Container>
      <NavBar.Brand href="/">Home</NavBar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="thumbnail">
          <Nav.Link>Thumbnail</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/edit">
          <Nav.Link>Edit</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </NavBar>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
