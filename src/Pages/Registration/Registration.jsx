import React from 'react'
import { Container, Row, Col, Form, InputGroup, FormControl, Button} from 'react-bootstrap'
import { FaLock, FaEnvelope } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router'
export default function Registration() {
    const location = useLocation()
    const history = useHistory()
    const redrirect_url = location.state?.from || '/'
    console.log('Patch Name: ', location.state?.from)
    const {newUserCreate, emailHandle, passwordHandle} = useAuth()
    const newUserRegistration = e =>{
        e.preventDefault()
        newUserCreate()
        .then(result =>{
            history.push(redrirect_url)
        })
    }
    return (
        <div className="login-page-sections">
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }} sm={{ span: 12 }}>
                    <div className="login-form-sections">
                        <div className="loginTitle">
                            <h5>User <span>Login</span></h5>
                        </div>
                        <Form onSubmit={newUserRegistration}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><FaEnvelope/></InputGroup.Text>
                                <FormControl onBlur={emailHandle} type="email" className="login-form" required placeholder="Email" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><FaLock/></InputGroup.Text>
                                <FormControl onBlur={passwordHandle} type="password" required placeholder="Password" />
                            </InputGroup>
                            <Button type="submit" variant="primary">Registration</Button>
                        </Form>
                        <NavLink to='/login'>Have a account?</NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
