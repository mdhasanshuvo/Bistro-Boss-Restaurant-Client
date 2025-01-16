import React, { useEffect, useState } from 'react';
import Menuitems from './Menuitems';
import Heading from './Heading';
import useMenu from '../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularData = menu.filter(item => item.category === 'popular');
    return (
        <section className='my-16'>
            <Heading
                subheading="Check it out"
                heading="FROM OUR MENU"
            ></Heading>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularData.map(item => <Menuitems item={item}></Menuitems>)
                }
            </div>
            <div className='my-5 flex justify-center'>
                <button className="btn btn-outline border-0 border-b-2 text-black text-base">View Full  Menu</button>
            </div>
        </section >
    );
};

export default PopularMenu;