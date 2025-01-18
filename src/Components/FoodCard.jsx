import React from 'react';

const FoodCard = ({item}) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-md">
            <figure>
                <img
                    className='w-full'
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-3 py-1 rounded-sm text-base'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;