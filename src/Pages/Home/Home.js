import React from 'react';
import Products from '../Products/Products';
import SmartWatch from '../SmartWatch/SmartWatch';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SmartWatch></SmartWatch>
        </div>
    );
};

export default Home;