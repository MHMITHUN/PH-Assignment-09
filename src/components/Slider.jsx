import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="h-[400px] w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="h-full rounded-xl"
            >
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img src="https://i.ibb.co/h9yF2z8/tech-box.jpg" className="w-full h-full object-cover" alt="Slide 1" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Discover New Gadgets</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img src="https://i.ibb.co/5GzXwz8/beauty-box.jpg" className="w-full h-full object-cover" alt="Slide 2" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Enhance Your Beauty</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img src="https://i.ibb.co/0jZ3z8/book-box.jpg" className="w-full h-full object-cover" alt="Slide 3" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-white">Read More Books</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
