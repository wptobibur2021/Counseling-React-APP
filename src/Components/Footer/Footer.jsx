import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className="footer-section-area">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">Usefull Link</h3>
                            <ul className="linkItems">
                                <li className="item">Hello</li>
                                <li className="item">Hello</li>
                                <li className="item">Hello</li>
                                <li className="item">Hello</li>
                                <li className="item">Hello</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
