import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Password Validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter");
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(name, photo)
                    .then(() => {
                        toast.success("User created successfully!");
                        navigate('/');
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success("User created successfully!");
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 flex items-center justify-center p-4">
            <Helmet>
                <title>Boxify | Register</title>
            </Helmet>

            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Form */}
                <div className="w-full order-2 md:order-1 animate-slide-up">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                            <p className="text-gray-600">Join our community today</p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Photo URL Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </button>
                                </div>
                                <p className="mt-2 text-xs text-gray-500">
                                    Must be at least 6 characters with uppercase and lowercase letters
                                </p>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-lg hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Create Account
                            </button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            {/* Google Sign Up */}
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="w-full py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-300 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
                            >
                                <FaGoogle className="text-red-500" />
                                <span>Sign up with Google</span>
                            </button>

                            {/* Sign In Link */}
                            <p className="text-center text-gray-600">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    className="text-secondary-600 hover:text-secondary-700 font-semibold transition-colors"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Right Side - Info */}
                <div className="hidden md:block space-y-6 order-1 md:order-2 animate-slide-up">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent leading-tight">
                            Start Your Journey
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Join thousands of happy subscribers and discover amazing products every month.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-800">Free Shipping</h3>
                                <p className="text-gray-600 text-sm">On all subscription orders</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-800">Cancel Anytime</h3>
                                <p className="text-gray-600 text-sm">No long-term commitments required</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-800">Exclusive Deals</h3>
                                <p className="text-gray-600 text-sm">Members-only discounts and offers</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-800">24/7 Support</h3>
                                <p className="text-gray-600 text-sm">We're here to help anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
