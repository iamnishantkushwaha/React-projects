import React from 'react'
import { IoIosContact } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsBoxFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate=useNavigate()
  return (
    <div className='min-h-screen bg-[#101922] flex items-center justify-center'>
        <div className='bg-[#1C242D] h-fit  flex p-4 flex-col w-1/4 rounded-xl '>
            <div className=' flex flex-col  items-center justify-center border-white/10'>
                 <img  className=" h-35 w-35 rounded-full" src="/public/images/download.jpg" alt="" />
                 <h1 className='text-3xl font-bold text-white'>Name</h1>
                 <h3 className='text-gray-500 font-semibold'>example@gmail.com</h3>
            </div>
            <div className=' h-60 py-4   font-bold '>
                <div className=' h-1/3 px-15 flex border-y border-white/10 justify-between items-center'><h1 className='flex gap-2 text-white'><IoIosContact className='text-2xl text-blue-600' />Edit Profile</h1><IoIosArrowForward className='text-gray-400' onClick={()=>{
                    navigate("/editprofile")
                }}/></div>
                <div className='h-1/3  px-15 flex border-y border-white/10 justify-between items-center'><h1 className='flex gap-2 text-white'><BsBoxFill className='text-2xl text-green-600'/>Order History</h1><IoIosArrowForward className='text-gray-400' /></div>
                <div className='h-1/3  px-15 flex border-y border-white/10 justify-between items-center'><h1 className='flex gap-2 text-white'><FaLocationDot className='text-2xl text-yellow-500'/>Save Address</h1><IoIosArrowForward className='text-gray-400'/></div>
            </div>
            <div className='h-20  flex py-4 px-15 items-center'><h1 className='flex gap-2 text-red-500 font-bold'><IoLogOut className='text-2xl text-red-500' />Log Out</h1></div>
        </div>
    </div>
  )
}

export default Profile