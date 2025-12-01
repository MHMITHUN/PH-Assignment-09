import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                Boxify
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Providing reliable subscription boxes since 2024. Curated products delivered to your door every month.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Subscription Boxes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Custom Boxes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Gift Boxes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Corporate Solutions</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Press Kit</a></li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 group">
                                <FaFacebook className="text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 group">
                                <FaTwitter className="text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 group">
                                <FaInstagram className="text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 group">
                                <FaLinkedin className="text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Boxify. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
