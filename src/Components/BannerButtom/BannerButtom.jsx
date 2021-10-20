import './BannerButtom.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaRecycle, FaComments } from 'react-icons/fa';
export default function BannerButtom() {
    return (
        <div className="BannerButtom-Secation section">
            <Container>
                <Row>
                    <Col className="mb-3" md={4}>
                    <div className="single-section-banner-buttom">
                        <Card>
                            <Card.Body>
                                <Card.Title>How We Can Help?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Your support will help us to make life better living for vulnerable tellus maximus lectus congue tincidun In hac habitasse.
                                </Card.Subtitle>
                                <Card.Text>
                                    Nulla facilisis tellus maximus lectus congue tincidunt. In hac habitasse platea dictumst. Quisque malesuada mi imperdiet, commodo eros sed, aliquet tortor. Aenean id arcu in lacus semper gravida. Proin porta leo et facilisis pretium.
                                </Card.Text>
                                <Button className="btn">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col className="mb-3" md={4}>
                    <div className="single-section-banner-buttom">
                        <Card className="text-center">
                            <Card.Body>
                                <FaRecycle className="bannerButtomIcon"/>
                                <Card.Title>REMOVE DEPRESSION</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum diam tortor, egestas varius erat aliquam a.
                                </Card.Text>
                                <Button className="btn">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col className="mb-3" md={4}>
                        <div className="single-section-banner-buttom">
                            <Card className="text-center">
                                <Card.Body>
                                    <FaComments className="bannerButtomIcon"/>
                                    <Card.Title>CONSULTING US</Card.Title>
                                    
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum diam tortor, egestas varius erat aliquam a.
                                    </Card.Text>
                                    <Button className="btn">Read More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
