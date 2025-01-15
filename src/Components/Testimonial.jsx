import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import quote from "../assets/image.png"

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-16'>
            <Heading
                subheading="What Our Clients Say"
                heading="TESTIMONIALS"
            ></Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className='mb-16 mt-10 mx-28 flex flex-col justify-center items-center space-y-4'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img className='w-32' src={quote} alt="" />
                                <p className='text-xl'>{review.details}</p>
                                <p className='text-3xl text-[#CD9003]'>{review.name}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;