import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Boxify | Dashboard</title>
            </Helmet>

            <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="stat bg-base-100 shadow-lg rounded-xl">
                    <div className="stat-title">Total Subscriptions</div>
                    <div className="stat-value text-primary">3</div>
                    <div className="stat-desc">2 active, 1 paused</div>
                </div>

                <div className="stat bg-base-100 shadow-lg rounded-xl">
                    <div className="stat-title">Next Delivery</div>
                    <div className="stat-value text-secondary">Nov 15</div>
                    <div className="stat-desc">Tech Gadget Box</div>
                </div>

                <div className="stat bg-base-100 shadow-lg rounded-xl">
                    <div className="stat-title">Loyalty Points</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">Redeemable for discounts</div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                <div className="overflow-x-auto">
                    <table className="table bg-base-100 shadow-lg rounded-xl">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Activity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Oct 25, 2024</td>
                                <td>Subscription Renewed - Tech Box</td>
                                <td className="text-success">Completed</td>
                            </tr>
                            <tr>
                                <td>Oct 10, 2024</td>
                                <td>Profile Updated</td>
                                <td className="text-info">Success</td>
                            </tr>
                            <tr>
                                <td>Sep 28, 2024</td>
                                <td>New Subscription - Book Box</td>
                                <td className="text-success">Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
