import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import useAuth from '../../Hooks/useAuth'
export default function Profile() {
    const {user} = useAuth()
    return (
        <div className="profile-sections p-5">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>{user.displayName}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
