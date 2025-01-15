import React from 'react';

const Heading = ({subheading, heading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center'>
            <p className='text-xl text-[#D99904] italic mb-2'>---{subheading}---</p>
            <p className='text-4xl uppercase border-y-4 py-5 mb-10'>{heading}</p>
        </div>
    );
};

export default Heading;