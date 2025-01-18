import React from 'react';
import { Helmet } from 'react-helmet-async';
import image from "../assets/menu/banner3.jpg"
import dessert from "../assets/menu/dessert-bg.jpeg"
import pizza from "../assets/menu/pizza-bg.jpg"
import salad from "../assets/menu/salad-bg.jpg"
import soup from "../assets/menu/soup-bg.jpg"
import Cover from '../Components/Cover';
import MenuCategory from '../Components/MenuCategory';
import useMenu from '../hooks/useMenu';
import Heading from '../Components/Heading';


const Menu = () => {
    const [menu] = useMenu();
    const offeredData = menu.filter(item => item.category === 'offered');
    const dessertData = menu.filter(item => item.category === 'dessert');
    const pizzaData = menu.filter(item => item.category === 'pizza');
    const saladData = menu.filter(item => item.category === 'salad');
    const soupData = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={image} title="OUR MENU" description="Would you like to try a dish?"></Cover>
            <Heading
                subheading="Don't miss"
                heading="TODAY'S OFFER"
            ></Heading>
            {/* offered menu */}
            <MenuCategory
                items={dessertData}
            ></MenuCategory>

            <MenuCategory
                items={dessertData}
                title="DESSERTS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                image={dessert}
            ></MenuCategory>


            <MenuCategory
                items={pizzaData}
                title="PizzaS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                image={pizza}
            ></MenuCategory>

            <MenuCategory
                items={saladData}
                title="saladS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                image={salad}
            ></MenuCategory>
            <MenuCategory
                items={soupData}
                title="soupS"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                image={soup}
            ></MenuCategory>
        </div>
    );
};

export default Menu;