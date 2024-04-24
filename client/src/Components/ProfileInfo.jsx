/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import LikeProfile from "./LikeProfile";
// import Spinner from "./Spinner";
const ProfileInfo = (userprofile) => {
    return (

        <div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10'>
            <div className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white; rounded-lg p-4'>
                <div className='flex gap-4 items-center'>
                    {/* User Avatar */}
                    <a href={userprofile.userProfile?.html_url} target='_blank' rel='noreferrer'>
                        <img src={userprofile.userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
                    </a>
                    {/* View on Github */}
                    <div className='flex gap-2 items-center flex-col'>
                        <LikeProfile userProfile={userprofile} />
                        <a
                            href={userprofile.userProfile?.html_url}
                            target='_blank'
                            rel='noreferrer'
                            className='bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
                            hover:bg-gray-600/10 border border-gray-800 text-white font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
                        >
                            <FaEye size={16} />
                            View on Github
                        </a>
                    </div>
                </div>

                {/* User Bio */}
                {userprofile.userProfile?.bio ? (
                    <div className='flex items-center gap-2'>
                        <TfiThought />
                        <p className='text-sm'>{userprofile.userProfile?.bio.substring(0, 60)}...</p>
                    </div>
                ) : null}

                {/* Location */}
                {userprofile.userProfile?.location ? (
                    <div className='flex items-center gap-2'>
                        <IoLocationOutline />
                        {userprofile.userProfile?.location}
                    </div>
                ) : null}

                {/* Twitter Username */}
                {userprofile.userProfile?.twitter_username ? (
                    <a
                        href={`https://twitter.com/${userprofile.userProfile.twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 hover:text-sky-500'
                    >
                        <FaXTwitter />
                        {userprofile.userProfile?.twitter_username}
                    </a>
                ) : null}

                {/* Member Since Date */}
                <div className='my-2'>
                    <p className='text-gray-600 font-bold text-sm'>Member since</p>
                    <p className=''>{userprofile.userProfile?.created_at}</p>
                </div>

                {/* Email Address */}
                {userprofile.userProfile?.email && (
                    <div className='my-2'>
                        <p className='text-gray-600 font-bold text-sm'>Email address</p>
                        <p className=''>{userprofile.userProfile.email}</p>
                    </div>
                )}

                {/* Full Name */}
                {userprofile.userProfile?.name && (
                    <div className='my-2'>
                        <p className='text-gray-600 font-bold text-sm'>Full name</p>
                        <p className=''>{userprofile.userProfile?.name}</p>
                    </div>
                )}

                {/* Username */}
                <div className='my-2'>
                    <p className='text-gray-600 font-bold text-sm'>Username</p>
                    <p className=''>{userprofile.userProfile?.login}</p>
                </div>
            </div>

            <div className='flex flex-wrap gap-2 mx-4'>

                <div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white; rounded-lg p-2 flex-1 min-w-24'>
                    <RiUserFollowFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Followers: {userprofile.userProfile?.followers}</p>
                </div>


                <div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white; rounded-lg p-2 flex-1 min-w-24'>
                    <RiUserFollowLine className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Following: {userprofile.userProfile?.following}</p>
                </div>


                <div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white; rounded-lg p-2 flex-1 min-w-24'>
                    <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Public repos: {userprofile.userProfile?.public_repos}</p>
                </div>


                <div className='flex items-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white; rounded-lg p-2 flex-1 min-w-24'>
                    <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Public gists: {userprofile.userProfile?.public_gists}</p>
                </div>
            </div>
        </div>
    );


}



export default ProfileInfo