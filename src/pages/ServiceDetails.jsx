import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaBox, FaCheckCircle, FaDollarSign, FaClock, FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const foundService = data.find(s => s.id === parseInt(id));
                setService(foundService);
            });
    }, [id]);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        // In a real app, this would send to backend
        console.log({ rating, review });
        alert("Thank you for your review!");
        setRating(0);
        setReview("");
    };

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <Helmet>
                <title>Boxify | {service.name}</title>
            </Helmet>

            {/* Hero Section with Image */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src={service.thumbnail}
                    alt={service.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                        <div className="max-w-4xl">
                            <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-primary-600 font-semibold rounded-full mb-4 text-sm">
                                {service.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                                {service.name}
                            </h1>
                            <p className="text-xl text-white/90 mb-6 drop-shadow-lg">
                                {service.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 rounded-lg shadow-xl">
                                    <div className="flex items-center gap-2 text-white">
                                        <FaDollarSign className="text-2xl" />
                                        <div>
                                            <div className="text-3xl font-bold">${service.price}</div>
                                            <div className="text-sm text-primary-100">/ {service.frequency}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Subscribe Now Card */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Subscription Options */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
                                        <FaBox className="text-white text-xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800">Choose Your Plan</h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-6 border-2 border-primary-500 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-800">{service.frequency} Plan</h3>
                                            <div className="text-2xl font-bold text-primary-600">${service.price}</div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">Best value for regular subscribers</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <FaCheckCircle className="text-green-500" />
                                                <span>Premium curated items</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <FaCheckCircle className="text-green-500" />
                                                <span>Free shipping</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <FaCheckCircle className="text-green-500" />
                                                <span>Cancel anytime</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <FaCheckCircle className="text-green-500" />
                                                <span>Exclusive member deals</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full mt-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                                    Subscribe Now
                                </button>
                            </div>

                            {/* What's Inside */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">What's Inside?</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg border border-primary-200">
                                        <div className="text-3xl mb-2">📦</div>
                                        <div className="font-semibold text-gray-800">5-7 Items</div>
                                        <div className="text-sm text-gray-600">Per box</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-lg border border-secondary-200">
                                        <div className="text-3xl mb-2">⭐</div>
                                        <div className="font-semibold text-gray-800">Premium</div>
                                        <div className="text-sm text-gray-600">Top brands</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Info */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="font-bold text-lg mb-4 text-gray-800">Quick Info</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaClock className="text-primary-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-800">Delivery</div>
                                            <div className="text-sm text-gray-600">{service.frequency}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaBox className="text-secondary-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-800">Category</div>
                                            <div className="text-sm text-gray-600">{service.category}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaStar className="text-yellow-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-800">Rating</div>
                                            <div className="text-sm text-gray-600">4.8/5 ⭐⭐⭐⭐⭐</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Guarantee Badge */}
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                                <div className="text-center">
                                    <FaCheckCircle className="text-5xl mx-auto mb-3" />
                                    <h3 className="font-bold text-xl mb-2">100% Satisfaction</h3>
                                    <p className="text-sm text-green-100">Money-back guarantee on your first box</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Reviews Display */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Reviews</h2>
                            <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
                        </div>

                        {/* Write Review */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Write a Review</h2>
                            <form onSubmit={handleSubmitReview} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                className={`text-3xl transition-colors ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                                    <textarea
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                                        rows="4"
                                        placeholder="Share your thoughts..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-lg hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
