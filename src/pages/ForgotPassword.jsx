import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FaEnvelope, FaKey } from "react-icons/fa";

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState(location.state?.email || "");

    const handleResetPassword = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent! Check your inbox.");
                // Redirect to Gmail
                window.open("https://mail.google.com", "_blank");
                navigate("/login");
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
            <Helmet>
                <title>Boxify | Forgot Password</title>
            </Helmet>

            <div className="w-full max-w-md animate-slide-up">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                        <FaKey className="text-white text-3xl" />
                    </div>
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Reset Your Password
                    </h1>
                    <p className="text-gray-600">
                        Enter your email address and we'll send you a password reset link.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100">
                    <form onSubmit={handleResetPassword} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <FaEnvelope className="text-primary-500" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {location.state?.email && (
                                <p className="mt-2 text-sm text-gray-500">
                                    Email pre-filled from login page
                                </p>
                            )}
                        </div>

                        {/* Reset Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Send Reset Link
                        </button>

                        {/* Back to Login */}
                        <p className="text-center text-gray-600">
                            Remember your password?{' '}
                            <a
                                href="/login"
                                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                            >
                                Login
                            </a>
                        </p>
                    </form>
                </div>

                {/* Info Box */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Note:</strong> After clicking "Send Reset Link", you'll be redirected to Gmail to check your inbox for the password reset email.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
