import React, { useEffect, useState } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../Api/AxiosPrivate';
import auth from '../Firebase/Firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url = `https://ware-house-server-production.up.railway.app/myorders?email=${email}`
        const getOrders = async () => {
            try {
                const {data } = await axiosPrivate.get(url)
                setOrders(data)
            }
            catch (error) {
               // console.log(error)
                if (error.response?.status === 401 || error.response?.status === 403) {
                   //navigate('/login')
                }
            }

        }

        getOrders();

    },[user])

    return (
        <Container>
            <h2 className='text-start' style={{color:"#105cc1"}}>my orders :{orders?.length}</h2>
            <hr />
            <div className='mt-5'>
                <div className='row g-2'>
                    {
                        orders.map(order => <div key={order._id} className='col-md-3'>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={order.img} />
                                <Card.Body>
                                    <Card.Title>{order?.product}</Card.Title>

                                    <Card.Text>
                                        {order.date}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default MyOrders;