import './Login.css'
import { Tooltip, Container, Row, Col, Form, InputGroup, FormControl, Button, OverlayTrigger} from 'react-bootstrap'
import { FaLock, FaEnvelope, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router'
export default function Login() {
    const location = useLocation()
    const redrirect_url = location.state?.from || '/'
    const {sineInWithGoogle, emailHandle, passwordHandle, sineInWithPasswordEmail} = useAuth()
    const history = useHistory()
    const loginGoogleHandle = () =>{
        sineInWithGoogle()
        .then((result) => {
            history.push(redrirect_url)
        })
    }

    // sineInWithPasswordEmail

    const sineInWithPassword = e =>{
        e.preventDefault()
        sineInWithPasswordEmail()
        .then((result) => {
            history.push(redrirect_url)
        })
    }
    
    // ToolTip
    const gooGleTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Login With Google
        </Tooltip>
    );
    return (
        <div className="login-page-sections">
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} sm={12}>
                        <div className="login-form-sections">
                            <div className="loginTitle">
                                <h5>User <span>Login</span></h5>
                            </div>
                            <Form onSubmit={sineInWithPassword}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><FaEnvelope/></InputGroup.Text>
                                    <FormControl onBlur={emailHandle} type="email" className="login-form" required placeholder="Email" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text><FaLock/></InputGroup.Text>
                                    <FormControl onBlur={passwordHandle} type="password" required placeholder="Password" />
                                </InputGroup>
                                <Button type="submit" variant="primary">Login</Button>
                            </Form>
                            <br></br> 
                            <NavLink to='/registration'>Don't have a account?</NavLink>
                            <div className="thirdPartiLoginSystem mt-3">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={gooGleTooltip}
                                >
                                    <Button onClick={loginGoogleHandle} variant="primary"><FaGoogle/></Button>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
