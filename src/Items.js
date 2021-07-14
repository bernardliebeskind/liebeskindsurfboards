import React from "react"
import "./App.css"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


function Items(props){
    return(
       <CardDeck>

            
        <Card ClassName="item" as="a" href={props.board1url} style={{ cursor: "pointer"}}>
            <Card.Img variant="top" src={props.board1} />
            <Card.Body>
                <Card.Title>{props.name1}</Card.Title>
                <Card.Text>
                {props.description1}
                </Card.Text>
            </Card.Body>
            </Card>

            <Card ClassName="item" as="a" href={props.board2url} style={{ cursor: "pointer"}}>
            <Card.Img variant="top" src={props.board2} />
            <Card.Body>
                <Card.Title>{props.name2}</Card.Title>
                <Card.Text>
                {props.description2}
                </Card.Text>
                
            </Card.Body>
            </Card>

            <Card ClassName="item" as="a" href={props.board3url} style={{ cursor: "pointer", textcolor: "black"}}>
            <Card.Img variant="top" src={props.board3} />
            <Card.Body>
                <Card.Title>{props.name3}</Card.Title>
                <Card.Text>
                {props.description3}
                </Card.Text>
            </Card.Body>
            </Card>

            
            
            </CardDeck>
       
    );
};

export default Items