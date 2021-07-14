import React from 'react'
import { Carousel } from 'react-bootstrap'
import board from "./board.jpeg"

function Caro(props) {
    return (
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.im1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.im2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>{props.name}</h3>
      <p>{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
      </div>
    )
}


export default Caro

