import React, { useState } from 'react';
import Cover from '../Components/Cover';
import image from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import FoodCard from '../Components/FoodCard';
import OrderTab from '../Components/OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessertData = menu.filter(item => item.category === 'dessert');
    const pizzaData = menu.filter(item => item.category === 'pizza');
    const saladData = menu.filter(item => item.category === 'salad');
    const soupData = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Cover image={image} title="OUR SHOP" description="Would you like to try a dish?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladData}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaData}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupData}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertData}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;