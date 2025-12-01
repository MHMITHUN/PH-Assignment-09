import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Boxify | Forgot Password</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-4">
                    <h1 className="text-4xl font-bold">Reset Your Password</h1>
                    <p className="py-4">Enter your email address and we'll send you a password reset link.</p>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleResetPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset Password</button>
                        </div>
                        <p className="text-center mt-4">
                            Remember your password? <a href="/login" className="text-primary font-bold">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
