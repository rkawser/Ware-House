import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = ({service}) => {
    const {name,img ,price,Image1,_id}=service;
    const [isShown, setIsShown] = useState(img);
    return (
        <div className='col-md-3 col-sm-6 card'>
            <img 
             onMouseEnter={() => setIsShown(Image1)}
             onMouseLeave={() => setIsShown(img)}
            src={isShown}  className='w-100 h-100' alt="" />
            <p>price:{price}</p>
            <p>name: {name}</p>
            <Link to={`/product/${_id}/product`}><button  
            className='btn btn-light my-2'>add to cart
            </button></Link>
        </div>
    );
};

export default Product;