import React from 'react';
import Heading from './Heading';
import featuredImg from "../assets/home/featured.jpg"
import '../styles/styles.css'


const Featured = () => {
    return (
        <div>
            <section className='my-16 featured-background p-10 bg-fixed'>
                <Heading
                    subheading="Check it out"
                    heading="FROM OUR MENU"
                ></Heading>
                <div className='flex justify-center items-center gap-5 m-20 text-white'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xl'>March 20, 2023</p>
                        <p className='text-xl'>WHERE CAN I GET SOME?</p>
                        <p className='text-base pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iusto consequatur saepe ipsam autem nulla harum! Ex culpa illo mollitia fugiat autem tenetur quibusdam natus voluptatibus quo doloribus vel laudantium voluptatem architecto, consequatur ratione dolore. Beatae aliquam, porro cum culpa repudiandae veniam voluptatem sunt quam non unde. Architecto, nemo magni!</p>
                        <button className="btn btn-outline border-0 border-b-2 text-white text-base">Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;