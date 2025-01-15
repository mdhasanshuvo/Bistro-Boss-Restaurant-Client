import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Menu from '../Components/Menu';
import Featured from '../Components/Featured';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;