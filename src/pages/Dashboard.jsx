import { Helmet } from "react-helmet-async";
import { FaBox, FaTruck, FaStar, FaCalendar, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12">
            <Helmet>
                <title>Boxify | Dashboard</title>
            </Helmet>

            <div className="container mx auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Dashboard
                    </h1>
                    <p className="text-gray-600 text-lg">Welcome back! Here's your subscription overview</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
                    {/* Total Subscriptions */}
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <FaBox className="text-white text-2xl" />
                            </div>
                            <span className="text-3xl font-bold text-gray-400">01</span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium mb-2">Total Subscriptions</h3>
                        <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-bold text-gray-800">3</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">2 active, 1 paused</p>
                    </div>

                    {/* Next Delivery */}
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <FaTruck className="text-white text-2xl" />
                            </div>
                            <span className="text-3xl font-bold text-gray-400">02</span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium mb-2">Next Delivery</h3>
                        <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-bold text-gray-800">Nov 15</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Tech Gadget Box</p>
                    </div>

                    {/* Loyalty Points */}
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <FaStar className="text-white text-2xl" />
                            </div>
                            <span className="text-3xl font-bold text-gray-400">03</span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium mb-2">Loyalty Points</h3>
                        <div className="flex items-baseline gap-2">
                            <p className="text-4xl font-bold text-gray-800">1,200</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Redeemable for discounts</p>
                    </div>
                </div>

                {/* Recent Activity Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-slide-up">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-md">
                            <FaCalendar className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Date</th>
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Activity</th>
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4 text-gray-600">Oct 25, 2024</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <FaBox className="text-primary-500" />
                                            <span className="font-medium text-gray-800">Subscription Renewed - Tech Box</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                            <FaCheckCircle />
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4 text-gray-600">Oct 10, 2024</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <FaInfoCircle className="text-blue-500" />
                                            <span className="font-medium text-gray-800">Profile Updated</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                            <FaCheckCircle />
                                            Success
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4 text-gray-600">Sep 28, 2024</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <FaBox className="text-secondary-500" />
                                            <span className="font-medium text-gray-800">New Subscription - Book Box</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                            <FaCheckCircle />
                                            Active
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-2xl shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-3">Explore More Boxes</h3>
                        <p className="mb-6 text-primary-100">Discover new subscription options tailored to your interests</p>
                        <a
                            href="/#services"
                            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-md"
                        >
                            Browse Subscriptions
                        </a>
                    </div>
                    <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-8 rounded-2xl shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-3">Refer a Friend</h3>
                        <p className="mb-6 text-secondary-100">Share Boxify and earn 500 bonus loyalty points</p>
                        <button className="inline-block px-6 py-3 bg-white text-secondary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-md">
                            Get Referral Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
