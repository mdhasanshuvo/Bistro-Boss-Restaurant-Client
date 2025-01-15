import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <p className='text-white uppercase -mt-16 text-4xl text-center'>Salad</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <p className='text-white uppercase -mt-16 text-4xl text-center'>Pizza</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <p className='text-white uppercase -mt-16 text-4xl text-center'>Soup</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <p className='text-white uppercase -mt-16 text-4xl text-center'>Desserts</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <p className='text-white uppercase -mt-16 text-4xl text-center'>Salad</p>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;