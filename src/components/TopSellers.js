import React, { Component } from 'react'
import json from '../TopSellers.json'
import { Container,Card,Row,Col } from 'react-bootstrap'
import BestSellers from './BestSellers'
import TopItems from './TopItems'
export class TopSellers extends Component {
    render() {
        return (
            <Container className="mt-4">
                 <Row>
                     <Col md={4}>
                 <h2>Top sellers</h2>
                {json.TopSellers.map(pro=>
                
                    <Col md={12}>
                    <Card >
                        <Row>
                            <Col sm={5}>
                               
                    <Card.Img variant="top"  src={`/images/${pro.image}`} width="100px" height="192px"/></Col>
                    <Col>
                    <Card.Body>
                        <Card.Title>{pro.title}</Card.Title>
                        <img src="images/stars.PNG" alt="img" width="50px" height="25px"/>
                        <Card.Text>
                            {pro.text}
                            </Card.Text>
                            <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group mr-2" role="group" >
                      <button type="button" class="btn btn-primary"><i class="fa fa-shopping-cart "></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-heart"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-retweet"></i></button>
                    </div>
                    </div>
                        </Card.Body>
                        </Col>
                        </Row>
                        </Card>
                       </Col>
                      
                        )}
                        </Col>
                        <Col md={4}><BestSellers /></Col>
                        <Col md={4}><TopItems /></Col>
                        </Row>
            </Container>
        )
    }
}

export default TopSellers;
