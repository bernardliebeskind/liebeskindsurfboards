import React from "react"
import "./App.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar"
import BW from "./BW.jpeg"

function Customs(props){
    return(
       <div >
        <NavBar/>

        

        <body>
        <Form style={{margin:"30px"}} action="https://formsubmit.co/bernardliebeskind@gmail.com" method="POST">
        
        <Form.Group>
        <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Full Name" input type="text" name="name" required/>
          </Form.Group>

        <Form.Group >
          <Form.Label>Email address</Form.Label>
          <Form.Control placeholder="Email Address" type="email" name="email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group>
        <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="Enter phone number" type="phone number" name="phone number" required/>
          </Form.Group>

        <Form.Group>
          <Form.Label>Please describe the board in which you are interested. </Form.Label>
          <Form.Control  type="message" name="message" required placeholder="An awesome surfboard!" as="textarea" rows={5}/>
          <Form.Text className="text-muted">
          Please note that exact dimensions are not listed with boards as we can find the perfect ride for you after consultation.
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </body>
      </div>
    );
};

export default Customs