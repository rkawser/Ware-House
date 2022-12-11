import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../Api/AxiosPrivate';
import auth from '../../Firebase/Firebase.init';
import swal from 'sweetalert';
const Manage = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user?.email;
        const url = `https://ware-house-server-production.up.railway.app/myorders?email=${email}`
        const getOrders = async () => {
            try {
                const { data } = await axiosPrivate.get(url)
                setOrders(data)
            }
            catch (error) {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    //navigate('/login')
                }
            }

        }
        getOrders();
    }, [user])


    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?🤔",
            text: "Cancel This service form you Order list !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://ware-house-server-production.up.railway.app/myorders/${_id}`
                    axios.delete(url)
                        .then(() => {
                            const remainer = orders.filter(order => order._id !== _id)
                            setOrders(remainer)
                        })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!🤗");
                }
            });


        // if (confirm) {
        //     const url = `https://ware-house-server-production.up.railway.app/myorders/${_id}`
        //     axios.delete(url)
        //         .then(() => {
        //             alert('your product delete')
        //             const remainer = orders.filter(order => order._id !== _id)
        //             setOrders(remainer)
        //         })
        // }
    }

    const handleApprov = () => {
        swal("😊", "your product already Approved", "success");
    }

    return (
        <Container>
            <h2 style={{ color: '#105caa' }} className=' text-start '>manage your orders </h2>
            <hr />

            <Table bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>order</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders.map((order) => {
                    const { Name, product, date, status, _id, img } =
                        order;
                    return (
                        <tbody key={_id}>
                            <tr style={{ borderWidth: "1px" }}>
                                <td>{product}</td>
                                <td>{Name}</td>
                                <td>{date}</td>
                                <td><img src={img} height={30} alt="" /></td>

                                <td>
                                    {/* action button  */}
                                    <button
                                        onClick={handleApprov}
                                        className="btn btn-info me-4"
                                    >Approved</button>
                                    < button
                                        onClick={() => handleDelete(_id)}
                                        className="btn btn-danger"
                                    >Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </Table>

        </Container>
    );
};

export default Manage;