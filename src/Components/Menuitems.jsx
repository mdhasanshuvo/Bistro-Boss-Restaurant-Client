import React from 'react';

const Menuitems = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className='flex gap-6'>
            <img style={{borderRadius: '0 220px 220px 220px'}} className='w-[120px] h-[90px]' src={image} alt="" />
            <div>
                <h4 className='uppercase text-xl pb-2'>{name} -------------</h4>
                <p>{recipe}</p>
            </div>
            <p className='text-xl text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default Menuitems;