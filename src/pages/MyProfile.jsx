import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaCamera, FaEdit } from "react-icons/fa";

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');

        updateUserProfile(name, photo)
            .then(() => {
                toast.success("Profile updated successfully!");
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12">
            <Helmet>
                <title>Boxify | My Profile</title>
            </Helmet>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            My Profile
                        </h1>
                        <p className="text-gray-600">Manage your account information</p>
                    </div>

                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-slide-up">
                        {/* Gradient Header */}
                        <div className="h-40 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Profile Content */}
                        <div className="px-6 md:px-12 pb-12">
                            {/* Avatar */}
                            <div className="relative -mt-20 mb-8 text-center">
                                <div className="inline-block relative">
                                    <img
                                        src={user?.photoURL || "https://i.ibb.co/tYw50P9/user.png"}
                                        alt={user?.displayName}
                                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
                                    />
                                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                                </div>
                                <h2 className="text-3xl font-bold mt-4 text-gray-800">{user?.displayName || 'User'}</h2>
                                <p className="text-gray-500 flex items-center justify-center gap-2 mt-2">
                                    <FaEnvelope className="text-primary-500" />
                                    {user?.email}
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="relative mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-4 bg-white text-gray-600 font-medium flex items-center gap-2">
                                        <FaEdit /> Update Profile Information
                                    </span>
                                </div>
                            </div>

                            {/* Update Form */}
                            <form onSubmit={handleUpdateProfile} className="space-y-6 max-w-2xl mx-auto">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <FaUser className="text-primary-500" />
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={user?.displayName}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                {/* Photo URL Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <FaCamera className="text-primary-500" />
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        defaultValue={user?.photoURL}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                    <p className="mt-2 text-sm text-gray-500">Enter a URL to your profile photo</p>
                                </div>

                                {/* Save Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <FaEdit />
                                    Save Changes
                                </button>
                            </form>

                            {/* Account Stats */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center border border-primary-200">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                                    <div className="text-sm text-gray-600">Active Subscriptions</div>
                                </div>
                                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center border border-secondary-200">
                                    <div className="text-3xl font-bold text-secondary-600 mb-2">12</div>
                                    <div className="text-sm text-gray-600">Boxes Received</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center border border-green-200">
                                    <div className="text-3xl font-bold text-green-600 mb-2">1,200</div>
                                    <div className="text-sm text-gray-600">Loyalty Points</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
