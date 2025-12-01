import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

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
                // Force reload to reflect changes in some cases if state doesn't update immediately
                // But AuthContext listener should handle it. 
                // Sometimes firebase auth object needs a reload to show new photoURL in some contexts if not handled carefully.
                // For now, we rely on state update.
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Boxify | My Profile</title>
            </Helmet>

            <div className="max-w-2xl mx-auto bg-base-100 shadow-xl rounded-xl overflow-hidden">
                <div className="bg-primary h-32 w-full"></div>
                <div className="px-8 pb-8">
                    <div className="relative -mt-16 mb-6 text-center">
                        <div className="avatar online">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL || "https://i.ibb.co/tYw50P9/user.png"} alt="User" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mt-4">{user?.displayName}</h2>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>

                    <div className="divider">Update Profile</div>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                defaultValue={user?.photoURL}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
