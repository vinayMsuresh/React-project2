import React, { Component } from 'react';
import { Container,Carousel,Button } from 'react-bootstrap';

export class SlideImages extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/sports3.jpg"
                alt="First slide" height="400px"
              />
              <Carousel.Caption>
              <h1 class="font-weight-bold">The World <br />Of Extrem Sports</h1>
              <p class="font-weight-bold"> SAVE 20% ON ALL APPRIAL</p>
                <Button variant="success">Shop now</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/sports2.jpg"
                alt="Second slide"  height="400px"
              />
          
              <Carousel.Caption>
              <h1 class="font-weight-bold">The World <br />Of Extrem Sports</h1>
              <p class="font-weight-bold"> SAVE 20% ON ALL APPRIAL</p>
              <Button variant="success">Shop now</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/sports1.jpg"
                alt="Third slide"  height="400px"
              />
          
              <Carousel.Caption>
              <h1 class="font-weight-bold">The World <br />Of Extrem Sports</h1>
              <p class="font-weight-bold"> SAVE 20% ON ALL APPRIAL</p>
              <Button variant="success">Shop now</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>
        )
    }
}

export default SlideImages
