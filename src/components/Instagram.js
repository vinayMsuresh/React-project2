
import React, { Component } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
export class Instagram extends Component {
    render() {
        return (
            <Container>
                <h1 class="text-center">Instagram</h1>
            <p class="text-center">------------o  cccccccccc   o-----------</p>
            <Row>
                <Col sm={2}>
                <img src="/images/img1.PNG" width="220px" height="250px"/>
                </Col>
                <Col sm={2}>
                <img src="/images/img2.PNG" width="220px" height="250px"/>
                    </Col>
                     <Col sm={2}>
                     <img src="/images/img3.PNG" width="220px" height="250px" />
                    </Col>
                    <Col sm={2}>
                    <img src="/images/img4.PNG" width="220px" height="250px" />
                    </Col>
                    <Col sm={2}>
                    <img src="/images/img5.PNG" width="220px" height="250px" />
                    </Col> <Col sm={2}>
                    <img src="/images/img6.PNG" width="220px" height="250px" />
                    </Col>
            </Row>
            </Container>
        )
    }
}

export default Instagram