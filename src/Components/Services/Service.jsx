import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function Service(props) {
    const {name, desc, photo, price, id} = props.service
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Img className="mb-2" variant="top" src={photo} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}    
                    </Card.Text>
                    <p>Price: ${price}</p>
                    <NavLink className="btn btn-primary" to={`/services/details/${id}`}>Read More</NavLink>
                </Card.Body>
            </Card>
        </Col>
    )
}
