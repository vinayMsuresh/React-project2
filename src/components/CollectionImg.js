import React, { Component } from 'react'
import {Container,Card,Col,Row} from 'react-bootstrap'
import json from '../Prosuct.json'
import Collection from './Collection'
export class CollectionImg extends Component {
    render() {
        return (
            <Container>
                <Row>
                {json.Products.map(pro=>
                
                    <Col sm={2}>
                    <Card >
                    <Card.Img variant="top"  src={`/images/${pro.image}`} width="75px" height="200px"/>
                    <Card.Body>
                        <Card.Title>{pro.title}</Card.Title>
                        <Card.Text>
                            {pro.text}
                            </Card.Text>
                        
                        </Card.Body>
                        </Card></Col>
                        )}</Row>
            </Container>
        )
    }
}

export default CollectionImg;
