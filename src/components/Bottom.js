import React, { Component } from 'react'
import { Container,Button,Carousel,Row } from 'react-bootstrap'
export class Bottom extends Component {
    render() {
        return (
           <Container className="mt-3">
               <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/dark1.jfif"
                alt="First slide" height="400px"
              />
              <Carousel.Caption>
              
                        <img src="/images/c2.jpg" class="rounded-circle"width="100px" height="100px" /> 
                        <h4 class="text-center text-white"><i><q>You don't win or lose the games bcoz of 11 you select. 
                You win or lose with what those 11 do on the field.
               </q></i></h4> <h3 class="text-center text-white">Rahul Dravid</h3> <p class="text-center"> Indian cricketer</p> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/dark2.jpg"
                alt="Second slide"  height="400px"
              />
          
              <Carousel.Caption>
              <img src="/images/c3.jpg" class="rounded-circle" width="100px" height="100px" /> 
              <h4 class="text-center text-white"><i><q>As much as you learn to handle failure, you must learn to handle success too, because that's also important. 
               </q></i></h4>    <h3 class="text-center text-white"> Souarav Ganguly</h3> <p class="text-center"> Indian cricketer</p> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/dark3.jpg"
                alt="Third slide"  height="400px"
              />
          
              <Carousel.Caption>
              <img src="/images/sp2.jpg" class="rounded-circle"  width="100px" height="100px" /> 
              <h4 class="text-center text-white"><i><q>I focus on cricket because it's something I am good at. After retiring, I want to serve the Indian Army. It has always been about serving the nation. 
               </q></i></h4>     <h3 class="text-center text-white">M S Dhoni</h3> <p class="text-center"> Indian cricketer</p> 
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
           </Container>
        )
    }
}

export default Bottom
