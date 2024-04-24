/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const LikeProfile = ({ userProfile }) => {
    const { authUser } = useAuthContext();
    const isOwnProfile = authUser?.username === userProfile.userProfile.login;
    if (!authUser || isOwnProfile) {
        return null;
    }
    const handleLikeProfile = async () => {
        try {
            const res = await fetch(`/api/users/like/${userProfile.userProfile.login}`, {
                method: "POST",
                credentials: "include",
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };


    if (!authUser) return null
    return (
        <button
            className='p-2 text-xs w-full font-medium rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
            hover:bg-gray-600/10 border border-gray-800 text-white border border-blue-400 flex items-center gap-2'
            onClick={handleLikeProfile}
        >
            <FaHeart size={16} /> Like Profile
        </button>
    );
};
export default LikeProfile;