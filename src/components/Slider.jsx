import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
    const slides = [
        {
            image: "https://i.postimg.cc/L4xKF4RK/tech-box.jpg",
            title: "Discover Latest Tech Gadgets",
            subtitle: "Premium devices delivered monthly"
        },
        {
            image: "https://i.postimg.cc/HxTKFRhd/beauty-2.webp",
            title: "Enhance Your Beauty",
            subtitle: "Curated skincare & makeup essentials"
        },
        {
            image: "https://i.postimg.cc/BQRzJXVD/bookworm3.jpg",
            title: "Dive Into New Worlds",
            subtitle: "Hand-picked books for every reader"
        },
        {
            image: "https://i.postimg.cc/rpNZGgwT/fitness4.jpg",
            title: "Elevate Your Fitness",
            subtitle: "Premium gear & healthy supplements"
        },
        {
            image: "https://i.postimg.cc/x8h6j4ty/snacks5.jpg",
            title: "Gourmet Snack Delights",
            subtitle: "World-class treats delivered to you"
        },
        {
            image: "https://i.postimg.cc/7ZgKDX7P/petlover6.jpg",
            title: "Pamper Your Pets",
            subtitle: "Premium toys & treats for furry friends"
        }
    ];

    return (
        <div className="h-[500px] md:h-[600px] w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="h-full rounded-none md:rounded-2xl overflow-hidden shadow-2xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.image}
                                className="w-full h-full object-cover"
                                alt={slide.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-slide-up">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-2xl text-white/90 mb-8 drop-shadow-lg">
                                    {slide.subtitle}
                                </p>
                                <a
                                    href="#services"
                                    className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                                >
                                    Explore Boxes
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
