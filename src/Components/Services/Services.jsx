import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Service from './Service'
export default function Services() {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then((res) => res.json())
        .then((data) => setServices(data))
    }, [])

    return (
        <div className="service-sections-area">
            <div className="section-title text-center">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>OUR <span>SERVICES</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autemvoluptatem obcaecati!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="services-section">
                <Container>
                    <Row>
                        {
                          services?.map((s) => <Service key={s.id} service={s}></Service>)
                        }

                    </Row>
                </Container>
            </div>
        </div>
    )
}
