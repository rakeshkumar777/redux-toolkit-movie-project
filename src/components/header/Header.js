import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {fetchAsyncMovies} from '../../app/movieSlice'


const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  const submitHandle = (e) => {
    e.preventDefault();
    // console.log(term)
    dispatch(fetchAsyncMovies(term))

  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><b>Movies</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Form onSubmit={submitHandle} className="d-flex">
              <Form.Control
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button type='submit' variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
}

export default Header;
