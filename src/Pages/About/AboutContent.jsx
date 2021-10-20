import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaComments } from 'react-icons/fa';
export default function AboutContent() {
    return (
        <div className="aboutPageSections">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="aboutPageLeftBar">
                            <Image src="https://images.pexels.com/photos/5711177/pexels-photo-5711177.jpeg" fluid />
                            <h2 className="aboutLeftTitle">Who We Are?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates. Iure quam laboriosam ullam omnis nulla deleniti, repellendus sequi reiciendis quas voluptatibus consectetur alias aspernatur deserunt veritatis.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="aboutRightBar">
                            <h2 className="aboutRightBarTitle">Welcome To Our Counselling</h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quia, eaque tempora eligendi facere excepturi facilis earum inventore harum dolores. Maxime, aspernatur. Voluptatum, sit.</p>
                            <Row>
                                <Col className="mb-4" md={6}>
                                    <div className="aboutSingleItem">
                                        <div className="iconAbout">
                                            <FaComments/>
                                        </div>
                                        <div className="aboutSingleContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-4" md={6}>
                                <div className="aboutSingleItem">
                                        <div className="iconAbout">
                                            <FaComments/>
                                        </div>
                                        <div className="aboutSingleContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-4" md={6}>
                                <div className="aboutSingleItem">
                                        <div className="iconAbout">
                                            <FaComments/>
                                        </div>
                                        <div className="aboutSingleContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-4" md={6}>
                                    <div className="aboutSingleItem">
                                        <div className="iconAbout">
                                            <FaComments/>
                                        </div>
                                        <div className="aboutSingleContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni temporibus voluptates adipisicing..</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
