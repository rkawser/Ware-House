import React, { useEffect, useState } from 'react';

const UseProductsDetails = (productId,type) => {
    const [Product,setProduct] =useState({})
    useEffect(()=>{
        const url = `https://ware-house.onrender.com/${type}/${productId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return [Product]
};

export default UseProductsDetails;