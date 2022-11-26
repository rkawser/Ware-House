import React from 'react';
import Products from '../Products/Products';
import Review from '../Review/Review';
import SmartWatch from '../SmartWatch/SmartWatch';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SmartWatch></SmartWatch>
            <Review></Review>
        </div>
    );
};

export default Home;