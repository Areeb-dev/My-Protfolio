import React, { Component } from 'react'
import {Link} from 'react-scroll';
import { Nav,Navbar,Dropdown,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer () {
        return (
          <>
          <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto" style={{textAlign:"center"}}>
              All Right Reserved
      
          </Nav>
          </Container>
        </Navbar>
            </>
        )
}
export default Footer