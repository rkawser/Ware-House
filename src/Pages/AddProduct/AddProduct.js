import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        const url = 'https://ware-house-server-production.up.railway.app/review'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('new product add')
               
            })
        
    }
    return (
        <Container className='add-page'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' {...register("Name")} />
                <input placeholder='price' type="number" {...register("price")} />
                <input placeholder='url' type="text" {...register("img")} id="" />
                <input type="submit" />
            </form>
        </Container>
    );
};

export default AddProduct;