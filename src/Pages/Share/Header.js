import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {signOut} from 'firebase/auth'
import auth from '../../Firebase/Firebase.init';
import logo from '../../image/logo.png'
import swal from 'sweetalert';
const Header = () => {
    const [user]=useAuthState(auth);
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} height={30} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link  href="home#product">Products</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/manage'>manage</Nav.Link>
                        <Nav.Link as={Link} to='/myorder'>My Orders</Nav.Link>
                        <p className='text-primary'>{user && user.displayName }</p>
                        { user ?
                         <button onClick={()=>signOut(auth).then(()=>{
                            swal("!", "SignOut success!😏", "success");
                         })} className='btn btn-danger'>SignOut</button> :
                        <Link to='/login'><button className='btn btn-primary'>LogIn</button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;