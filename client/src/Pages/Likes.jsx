
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
const Likes = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      try {
        const res = await fetch("/api/users/likes", { credentials: "include" });
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setLikes(data.likedBy);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getLikes();
  }, []);

  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
      <table className='w-full text-sm text-left rtl:text-right overflow-hidden backdrop-filter backdrop-blur-xl bg-opacity-10  bg-clip-padding backdrop-filter border border-gray-800 hover:bg-gray-600/10 text-white'>
        <thead className='text-xs uppercase bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>No</div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Username
            </th>
            <th scope='col' className='px-6 py-3'>
              Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {likes.map((user, idx) => (
            <tr className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
            hover:bg-gray-600/10 border border-gray-800 text-white border-b' key={user.username}>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <span>{idx + 1}</span>
                </div>
              </td>
              <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
                <img className='w-10 h-10 rounded-full' src={user.avatarUrl} alt='User Avatar' />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{user.username}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{(user.likedDate)}</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <FaHeart size={22} className='text-red-500 mx-2' />
                  Liked your profile
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Likes