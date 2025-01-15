import React, { useEffect, useState } from 'react';
import Menuitems from './Menuitems';
import Heading from './Heading';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularData = data.filter(item => item.category === 'popular')
                setMenu(popularData)
            })
    }, [])
    return (
        <section className='my-16'>
            <Heading
                subheading="Check it out"
                heading="FROM OUR MENU"
            ></Heading>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <Menuitems item={item}></Menuitems>)
                }
            </div>
        </section >
    );
};

export default Menu;