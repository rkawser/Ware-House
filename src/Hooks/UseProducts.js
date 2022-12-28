import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://ware-house.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
};

export default UseProducts;