import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState("");

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const foundService = data.find(s => s.id == id);
                setService(foundService);
            });
    }, [id]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            rating,
            text: reviewText,
            date: new Date().toLocaleDateString()
        };
        setReviews([...reviews, newReview]);
        setReviewText("");
        toast.success("Review submitted successfully!");
    };

    if (!service) return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Boxify | {service.name}</title>
            </Helmet>

            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                <figure className="lg:w-1/2">
                    <img src={service.thumbnail} alt={service.name} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-4xl mb-4">{service.name}</h2>
                    <div className="badge badge-secondary mb-4">{service.category}</div>
                    <p className="text-2xl font-bold text-primary mb-4">${service.price} <span className="text-sm text-gray-500">/ {service.frequency}</span></p>
                    <p className="text-lg mb-6">{service.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-lg">Subscribe Now</button>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Reviews</h3>
                    {reviews.length === 0 ? (
                        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map(review => (
                                <div key={review.id} className="card bg-base-200 p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="rating rating-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <input
                                                    key={i}
                                                    type="radio"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    checked={i + 1 === parseInt(review.rating)}
                                                    readOnly
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6">Write a Review</h3>
                    <form onSubmit={handleReviewSubmit} className="card bg-base-100 shadow-lg p-6">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked={rating === star}
                                        onChange={() => setRating(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Share your thoughts..."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
