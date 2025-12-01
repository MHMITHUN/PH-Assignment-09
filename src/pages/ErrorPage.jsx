import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center px-4">
            <Helmet>
                <title>Boxify | 404 Not Found</title>
            </Helmet>
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <p className="text-2xl font-semibold mt-4">Oops! Page not found.</p>
            <p className="mt-2 text-gray-500">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <Link to="/" className="btn btn-primary mt-8">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
