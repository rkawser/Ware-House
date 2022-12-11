import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='mt-5'>
             <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;