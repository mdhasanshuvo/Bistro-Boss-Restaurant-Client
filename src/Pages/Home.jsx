import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Menu from '../Components/Menu';
import Featured from '../Components/Featured';
import Testimonial from '../Components/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;