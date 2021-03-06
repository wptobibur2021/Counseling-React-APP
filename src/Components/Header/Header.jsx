import './Header.css'
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth'
export default function Header() {
    const {user, logOut} = useAuth();
    return (
        <div className="header-section-area">
            <div className="headerSections">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <NavLink className="logo-text" to="/">COUNSELING</NavLink>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="menu-item" to='/'>Home</NavLink>
                            <NavLink className="menu-item" to='/about'>About</NavLink>
                            <NavLink className="menu-item" to='/counselor'>Counselor</NavLink>
                            {
                                user?.email ?
                                <NavDropdown title={user.displayName} id="navbarScrollingDropdown">
                                    
                                    <NavDropdown.Item><NavLink to='/about' className="menu-item">About Us</NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut}>
                                        <FaPowerOff className="logoutIcon menu-item"/> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <>
                                <NavLink className="menu-item" to='/login'>Login</NavLink>
                                <NavLink className="menu-item" to='/registration'>Registration</NavLink>
                                </>    
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
