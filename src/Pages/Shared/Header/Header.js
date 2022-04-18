import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomLink from '../../Home/CustomLink/CustomLink';
import logo from '../../../images/logo.png';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    // console.log(user.displayName);
    return (
        <Navbar sticky='top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="#home">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        {/* <Nav.Link href="home#services">Services</Nav.Link> */}
                        <Nav.Link as={CustomLink} to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">About Me</Nav.Link>
                        {/* <Nav.Link as={CustomLink} to="/login">Login</Nav.Link> */}

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {user ? <h4 className='mt-2'>{user?.displayName}</h4> : "USER"}
                    {user ? <button type="button" className="btn btn-light" onClick={logout}>Sign Out</button> :
                        <Link to="/login" className="btn btn-light">Sign in</Link>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;