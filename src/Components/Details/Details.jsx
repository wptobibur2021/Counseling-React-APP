import './Details.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
export default function Details() {
    return (
        <div className='services-details'>
            <Container>
                <Row>
                    <Col md={8}>
                        <Card>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg" />
                            <Card.Body>
                            <Card.Text>
                                Praesent id nulla at eros euismod ullamcorper id et ligula. Sed quis iaculis magna. Aenean at dui eu massa pellentesque pretium feugiat nec est. Sed in arcu elit. Vivamus ut eros eu felis gravida lacinia id in mi. Suspendisse in suscipit sapien, quis finibus ex. Etiam ornare cursus nibh, ut laoreet dui feugiat nec. Sed velit est, malesuada luctus pretium nec, rhoncus in risus. In commodo tellus sit amet varius aliquam. Morbi sed convallis mi, sit amet egestas lectus.
                                Suspendisse ipsum dui, varius eu dui vulputate, tristique faucibus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nisl ligula, placerat vel mi et, accumsan lobortis erat. Donec at augue et nisl accumsan cursus non nec felis. Etiam dignissim risus augue, non accumsan tellus feugiat ac. Etiam nec lectus egestas, fermentum nisl at, fermentum augue. Nullam consequat, nisi tempor blandit efficitur, mi augue consectetur neque, et molestie tellus velit a lectus. Vivamus lobortis molestie interdum. Nulla scelerisque sit amet tellus vitae ultricies.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </div>
    )
}
