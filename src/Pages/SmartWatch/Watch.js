import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Watch.css'
const Watch = ({ watch }) => {
    const { name, img, Image1, price, _id } = watch;
    const [isShown, setIsShown] = useState(img);
    return (
        <div className='col-md-3 col-sm-6 card'>
            <img
                onMouseEnter={() => setIsShown(Image1)}
                onMouseLeave={() => setIsShown(img)}
                src={isShown} className='w-100' alt="" />
            <p>price:{price}</p>
            <p>name: {name}</p>
            <Link to={`/product/${_id}/watch`}>
                <button className='btn text-dark w-btn my-2'>add to cart</button>
            </Link>
        </div>
    );
};

export default Watch;