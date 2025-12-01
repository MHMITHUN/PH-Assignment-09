import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
            <Helmet>
                <title>Boxify | 404 Not Found</title>
            </Helmet>

            <div className="max-w-2xl text-center animate-slide-up">
                {/* Icon */}
                <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                        <FaExclamationTriangle className="text-white text-6xl" />
                    </div>
                </div>

                {/* 404 Text */}
                <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <FaHome />
                        Go Back Home
                    </Link>
                    <Link
                        to="/login"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-300"
                    >
                        Login
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="mt-16 flex justify-center gap-4">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-secondary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
