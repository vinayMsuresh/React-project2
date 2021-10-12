import React, { Component } from 'react'
import { Navbar, Container,Nav} from 'react-bootstrap'

export class NavSection extends Component {
    render() {
        return (
            <Container fluid>
              <Navbar collapseOnSelect   expand="lg">

  <Navbar.Brand href="/"><img src="/images/bpk_shop.PNG" height="45px" alt="img" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link to="/" href="/">Home</Nav.Link>
      <Nav.Link href="#pricing">Shop</Nav.Link>
      <Nav.Link href="#pricing">Picnic</Nav.Link>
      <Nav.Link href="#pricing">Promotion</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Nav.Link to="/contact" href="/contact">Contact Us</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link><i className="fa fa-search"></i></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Nav.Link><i className="fa fa-shopping-cart"></i></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Nav.Link><i className="fa fa-bars"></i></Nav.Link>
    </Nav>
    </Navbar.Collapse>

</Navbar>
            </Container>
        )
    }
}

export default NavSection;
