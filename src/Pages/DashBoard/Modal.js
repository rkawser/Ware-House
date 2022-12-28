import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import './Modal.css';
import swal from 'sweetalert';
import { AiFillHome, AiOutlineAppstore, AiOutlineTable } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { BsBoxArrowRight } from "react-icons/bs";

const Modal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Link className='text-decoration-none text-light' onClick={handleShow}>DashBoard  </Link>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        DashBoard 
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <hr />

                    <Link className='text-decoration-none' to='/home'>
                        <button className='modal-btn text-center'><AiFillHome /> Home</button>
                    </Link>

                    <Link className='text-decoration-none ' to='/myorder'>
                        <button className='modal-btn text-center'><AiOutlineAppstore /> My-orders</button>
                    </Link>

                    <Link className='text-decoration-none ' to='/manage'>
                        <button className='modal-btn text-center'><AiOutlineTable /> Manage-Orders</button>
                    </Link>

                    <Link className='text-decoration-none ' to='/payment'>
                        <button className='modal-btn text-center'><MdPayments /> Payment</button>
                    </Link>

                    <Link className='text-decoration-none '>
                        <button onClick={() => signOut(auth).then(() => {
                            swal("!", "SignOut success!😏", "success");
                        })} className='modal-btn text-center text-danger'><BsBoxArrowRight /> LogOut</button>
                    </Link>


                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Modal;