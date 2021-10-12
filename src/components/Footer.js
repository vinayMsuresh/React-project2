import React, { Component } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
export class Footer extends Component {
    render() {
        return (
           <Container  style={{backgroundColor:"black"}}>
                <Row>
                   <Col sm={2}>
                <Button variant="warning"  size="lg"><i className="fa fa-facebook"></i>&nbsp; FACEBOOK</Button></Col>
                <Col sm={2}>
                <Button variant="danger"  size="lg"><i className="fa fa-twitter"></i>&nbsp; TWITTER</Button></Col>
                <Col sm={2}>
                <Button variant="success" size="lg"><i className="fa fa-instagram"></i>&nbsp; INSTAGRAM</Button></Col>
                <Col sm={2}>
                <Button variant="warning"  size="lg"><i className="fa fa-dribbble"></i>&nbsp; DRIBBBLE</Button></Col>
                <Col sm={2}>
                <Button variant="danger"  size="lg"><i className="fa fa-pinterest"></i>&nbsp; PINTEREST</Button></Col>
                <Col sm={2}>
                <Button variant="success"  size="lg"><i className="fa fa-twitter"></i>&nbsp; TELEGRAM</Button></Col>
                </Row>
                <Container>
                
            <img src="/images/bpk_logo.PNG" width="100px" height="100px" /> 
            
            <h4 class="text-center text-white h41"><i class="fa fa-quote-left"></i>Happiness is a butterfly, which when pursued, 
                 is always beyond your grasp, but which, 
                    if you will sit down quietly, may alight upon you.
                    <i className="fa fa-quote-right"></i></h4> 
                <Container>
                
                <a href="#" className="btn " >
                    <img src="../images/paypal.png" width="80px" height="40px" style={{backgroundColor: "white"}}/></a>
                <a href="#" className="btn "><img src="../images/visa.png" width="80px" height="40px"/></a>
                <a href="#" className="btn "><img src="../images/discover.jfif" width="80px" height="40px"/></a>
                <a href="#" className="btn "><img src="../images/amex.jpg" width="80px" height="40px"/></a>
                <a href="#" className="btn"><img src="../images/MasterCard_Logo.png" width="80px" height="40px" style={{backgroundColor: "white"}}/></a>
                <a href="#" className="btn"><img src="../images/maestro.png" width="80px" height="40px" style={{backgroundColor: "white"}}/></a>
                
                
                

                </Container>
         </Container>
     
           </Container>
        )
    }
}

export default Footer
