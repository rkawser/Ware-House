import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <Container>
                <div className='notfound-page'>
                   <Link to='/'> <button className='nf-btn'>Back to Home</button></Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;