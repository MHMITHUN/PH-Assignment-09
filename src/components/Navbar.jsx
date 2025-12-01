import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('Logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive
            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Boxify
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/my-profile" className={navLinkClass}>My Profile</NavLink>
                        <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                    </div>

                    {/* User Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <>
                                <div className="flex items-center space-x-3">
                                    <div className="relative group">
                                        <img
                                            src={user.photoURL || "https://i.ibb.co/tYw50P9/user.png"}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary-500 cursor-pointer hover:border-primary-600 transition-all"
                                        />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        <div className="absolute -bottom-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {user.displayName || 'User'}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogOut}
                                    className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-medium hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 transition-colors"
                    >
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 animate-slide-up">
                        <NavLink to="/" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/my-profile" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>My Profile</NavLink>
                        <NavLink to="/dashboard" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Dashboard</NavLink>
                        <div className="pt-4 border-t border-gray-200 space-y-2">
                            {user ? (
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-3 px-4 py-2">
                                        <img
                                            src={user.photoURL || "https://i.ibb.co/tYw50P9/user.png"}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary-500"
                                        />
                                        <span className="font-medium text-gray-700">{user.displayName || 'User'}</span>
                                    </div>
                                    <button
                                        onClick={() => { handleLogOut(); setMobileMenuOpen(false); }}
                                        className="w-full px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-medium"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block w-full px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
