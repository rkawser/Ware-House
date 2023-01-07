import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useproductsDetails from '../../Hooks/UseProductsDetails';
import './DetailsPage.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import swal from 'sweetalert';


const DetailsPage = () => {
    const { detail,type } = useParams();
    const [Product] = useproductsDetails(detail,type)
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    
    //from 
    const { register, handleSubmit,setValue } = useForm();
    const onSubmit = data => {
        const url =`https://ware-house.onrender.com/myorder`;
        axios.post(url,data)
        .then(response=>{
            swal("Good job!", "Yay order confirm!", "success");
            navigate('/')
        })
    }

    setValue('Name', `${user.displayName}`)
    setValue('Email', `${user.email}`)
    setValue('img', `${Product.img}`)
    setValue('product', `${Product.name}`)

    return (
        <Container>
            <Row>
                <h2 className='text-start order-text'>Confirm your Order :)</h2>
                <hr />
                <Col md={6}>
                    <div>
                        <img src={Product.img} className='img-fluid' alt="" />
                        <div className='d-flex justify-content-around mt-2'>
                            <h5>{Product.name}</h5>
                            <p className='text-primary'>price: ${Product.price}</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='confirm-order '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input  placeholder='Your Name' {...register("Name")} readOnly disabled />
                            <input  placeholder='your Email' type='Email' {...register("Email")} readOnly disabled  />
                            <input className='d-none' placeholder='your product' {...register("product")} readOnly disabled/>

                            <input className='d-none' placeholder='your product image' {...register("img")} readOnly disabled/>

                            <input placeholder='Your Number' type="number" {...register("number",{ min: 11})} required />
                            <input placeholder='Your address' {...register("address")}  required/>
                            <input type="date" {...register("date")} required/>
                            <input id='order-btn' type="submit" value='CONFIRM ORDER' />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailsPage;