import React from 'react';
import { Helmet } from 'react-helmet-async';
import image from "../assets/menu/banner3.jpg"
import Cover from '../Components/Cover';
import PopularMenu from '../Components/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={image} title="OUR MENU" description="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default Menu;