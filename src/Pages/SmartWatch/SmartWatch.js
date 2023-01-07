import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWatch from '../../Hooks/UseWatch';
import Loading from '../Share/Loading';
import './SmartWatch.css';
import Watch from './Watch';
const SmartWatch = () => {
    const [watches] = useWatch()
    return (
        <Container className='watch-section my-5'>
            <h5 className='watch-text'>SMART WATCH</h5>
            <Row className='mt-5'>
                <Col md={4}>
                    <div className='watch1'>

                    </div>
                </Col>
                <Col md={4}>
                    <div className='watch2'>

                    </div>
                </Col>
                <Col md={4}>
                    <div className='watch3'>

                    </div>
                </Col>
            </Row>
{
    watches.length > 0 ?
            <div className='row gy-5 px-2'>
               {
                    watches.map(watch => <Watch key={watch._id} watch={watch}></Watch>)
                }
            </div>
            :
            <div>
                <Loading></Loading>
            </div>}

        </Container>
    );
};

export default SmartWatch;