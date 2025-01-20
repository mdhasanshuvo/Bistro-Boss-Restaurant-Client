import React from 'react';
import Menuitems from './Menuitems';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, description, image }) => {
    return (
        <div className='py-12'>
            {title && <Cover image={image} title={title} description={description}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 py-12'>
                {
                    items.map(item => <Menuitems item={item}></Menuitems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-2 text-black text-base">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;