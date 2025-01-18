import React from 'react';
import Menuitems from './Menuitems';
import Cover from './Cover';

const MenuCategory = ({ items, title, description, image }) => {
    return (
        <div className='py-12'>
            {title && <Cover image={image} title={title} description={description}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 py-12'>
                {
                    items.map(item => <Menuitems item={item}></Menuitems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;