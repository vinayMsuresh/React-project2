import React, { Component } from 'react'
import { Container,Nav } from 'react-bootstrap'
export class Collection extends Component {
    render() {
        return (
            <Container>
                 <h1 class="text-center">Featured collections</h1>
            <p class="text-center">------------o  cccccccccc   o-----------</p>
            <Nav className="justify-content-center">
    <Nav.Item>
      <Nav.Link href="newArrival" className="ml-5">New Arrival</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="link-1" className="ml-5 text-dark">Clothing</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="link-2" className="ml-5 text-dark">Hats</Nav.Link>
    </Nav.Item>
    <Nav.Item>
     
      <Nav.Link href="link-3" className="ml-5 text-dark">Shoes</Nav.Link>
      
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="link-4" className="ml-5 text-dark">Bags</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="link-5" className="ml-5 text-dark">Accessories</Nav.Link>
    </Nav.Item>
  </Nav>
            </Container>
        )
    }
}

export default Collection
