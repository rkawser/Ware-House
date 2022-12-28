import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import auth from '../../Firebase/Firebase.init';
import logo from '../../image/logo.png'
import swal from 'sweetalert';
import avatar from '../../image/avatar.png'
import Modal from '../DashBoard/Modal';
const Header = () => {
    const [user] = useAuthState(auth);
    // const userPhoto = user?.photoURL ;
   
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
                        <Nav.Link href="home#product">Products</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>

                    <Nav>
{
                      user &&  <Nav.Link as={Link} >
                            <Modal></Modal>
                       </Nav.Link>
}
                        {user ?
                            // <button onClick={() => signOut(auth).then(() => {
                            //     swal("!", "SignOut success!😏", "success");
                            // })} className='btn btn-danger'>SignOut</button>

                            <img src={user ? user?.photoURL : avatar} style={{
                                width: "50px",
                                borderRadius: "100%",
                                margin: "0 auto",
                                cursor: "pointer",
                            }} className='' alt="" />
                            :

                            <Link to='/login'><button className='btn btn-primary'>LogIn</button></Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;