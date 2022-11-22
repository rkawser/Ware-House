import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} height={30} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link href="#pricing">Products</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/manage'>manage</Nav.Link>
                        <Nav.Link href="#deets">My Orders</Nav.Link>
                        <Link to='/login'><button className='btn btn-primary'>LogIn</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;