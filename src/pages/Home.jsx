import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="bg-gradient-to-b from-white via-gray-50 to-white">
            <Helmet>
                <title>Boxify | Home</title>
            </Helmet>

            {/* Hero Slider Section */}
            <section className="mb-16">
                <Slider />
            </section>

            {/* Services Section */}
            <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Our Subscription Boxes
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Choose from our wide range of curated boxes tailored to your interests.
                        From tech to beauty, we have something for everyone.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => <ServiceCard key={service.id} service={service} />)}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Why Choose Boxify?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Experience the difference with our premium subscription service
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">🚀</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Fast Delivery</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We ensure your box arrives on time, every time. Track your delivery in real-time.
                            </p>
                        </div>
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">💎</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Premium Quality</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We partner with top brands to bring you the best products every month.
                            </p>
                        </div>
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">❤️</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Curated with Love</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Each box is hand-picked by our experts to ensure your complete satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Join thousands of happy subscribers worldwide
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                <img src="https://i.ibb.co/tYw50P9/user.png" alt="User" className="w-12 h-12 rounded-full" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">Jhankar Mahmud</h4>
                                <p className="text-sm text-gray-500">Tech Box Subscriber</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed italic">
                            "I love the Tech Gadget Box! Every month feels like EID. The products are always high quality and useful. Best subscription service I've ever used!"
                        </p>
                        <div className="flex mt-4 text-yellow-400">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                <img src="https://i.ibb.co/tYw50P9/user.png" alt="User" className="w-12 h-12 rounded-full" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">Mahamudul Hasan</h4>
                                <p className="text-sm text-gray-500">Fitness Box Subscriber</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed italic">
                            "The Fitness Box keeps me motivated. The gear is great and the snacks are delicious. Highly recommended for anyone on their fitness journey!"
                        </p>
                        <div className="flex mt-4 text-yellow-400">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20"> <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                    Sign up today and get your first box with a special welcome discount!
                </p>
                <a
                    href="/register"
                    className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                    Get Started Now
                </a>
            </div>
            </section>
        </div>
    );
};

export default Home;
