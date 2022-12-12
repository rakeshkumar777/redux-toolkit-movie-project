import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Footer = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Social Media" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Twitter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">About us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Brand style={{ fontSize: "12px", marginTop: "30px", align: "center", color: "#8c8d99" }}> all rights are reserved</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Footer;
