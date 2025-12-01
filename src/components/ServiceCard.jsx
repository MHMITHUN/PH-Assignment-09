import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, name, thumbnail, category, price, frequency, description } = service;

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
            {/* Image */}
            <div className="relative overflow-hidden h-56">
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-sm font-semibold rounded-full shadow-md">
                        {category}
                    </span>
                </div>

                {/* Pricing Badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-bold rounded-full shadow-lg">
                        ${price}/{frequency}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Button */}
                <Link
                    to={`/service/${id}`}
                    className="block w-full py-3 mt-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg text-center hover:from-primary-600 hover:to-primary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
