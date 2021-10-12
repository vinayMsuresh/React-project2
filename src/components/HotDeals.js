import React, { Component } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
export class HotDeals extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col md={6}>
            <img src="/images/skate.PNG" class="ml" width="600px" height="600px" />
            </Col>
            <Col>
            <Container>
            <h6 > HOT DEALS</h6><br/>
            <Row>
                <Col sm={2}>
                    <button type="button" class="btn btn-primary rounded-circle "></button>
                </Col>
                <Col sm={2}>
                    <button type="button" class="btn btn-warning rounded-circle"></button>
                </Col>
                <Col sm={2}>
                    <button type="button" class="btn btn-dark rounded-circle"></button>
                </Col>
            </Row>
            <br/>
           <h2 >TOP TEXTILES EVER </h2><br/>
            <img src="images/stars.PNG" alt="stars"/>&nbsp;<small>(05 reviews)</small><br/>
            <h3 class="text-danger">$230.00</h3><br/>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio omnis amet eligendi voluptatem animi pariatur facilis, 
            rem veniam fugiat sit quasi vero enim! Corrupti aperiam accusamus vero rerum beatae.
            
           </p>
        
           <div class="row ">
               <label>&nbsp;&nbsp;&nbsp;&nbsp;Color&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <Col sm={2}>
                <button type="button" class="btn btn-primary rounded-circle"></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-warning rounded-circle"></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-dark rounded-circle"></button>
            </Col>
               
           </div>
           <br/>
           <div class="btn-toolbar" role="toolbar">
            <div class="btn-group mr-2" role="group" ><label> Size &nbsp;&nbsp;&nbsp;</label>
              <button type="button" class="btn btn-light">S</button>
              <button type="button" class="btn btn-light">M</button>
              <button type="button" class="btn btn-light">L</button>
              <button type="button" class="btn btn-light">XL</button>
            </div>
            </div><br/>
            <Row>
            <Col sm={2}>
                <button type="button" class="btn btn-primary "><h2>25</h2>
                <i>&nbsp;&nbsp;days&nbsp;&nbsp;&nbsp;</i></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-primary "><h2>14</h2><i>&nbsp;&nbsp;hours&nbsp;&nbsp;</i></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-primary "><h2>57</h2><i>Mintues</i></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-primary "><h2>42</h2><i>Seconds</i></button>
            </Col>
        </Row>
       </Container>
               </Col> </Row>
        </Container>
        )
    }
}

export default HotDeals;
