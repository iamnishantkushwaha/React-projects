import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-fit  w-full bg-[#0B1116] p-7 '>
      <div className=' grid grid-cols-4 gap-x-6  px-5 py-14 border-b-2 border-b-gray-400 justify-center'>
        <div className='flex flex-col gap-3'><h1 className=' text-white text-2xl font-bold'>Evolve Cart</h1>
        <p className='text-gray-500'>Evolve Cart is a modern e-commerce platform that makes online shopping simple, secure, and seamless.</p>
        <div className='flex  items-center gap-5 text-xl text-gray-500'><FaTwitter /><FaGithub /></div></div>
        <div  className='flex flex-col gap-2'><h1 className='font-bold text-white'>SHOP</h1>
        <ul className='text-gray-500'>
            <li>New Arrivals</li>
            <li>Computer</li>
            <li>Smart Homes</li>
            <li>Audio and Sound</li>
        </ul></div>
        <div className='flex flex-col gap-2'><h1 className='font-bold text-white'>SUPPORT</h1>
        <ul className='text-gray-500'>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Returns & Warranty</li>
            <li>Privacy Policy</li>
        </ul></div>
        <div  className='flex flex-col gap-2'><h1 className='font-bold text-white'>STAY IN THE LOOP</h1>
        <p className='text-gray-500'>Subscribe for exclusive updates and special offers and Stay connected with new arrivals and promotions.</p>
        <div className='flex gap-1 items-center '><input type="text" className='bg-gray-700 h-12 w-70 p-2 rounded font-bold  focus:outline-0' placeholder='Enter Your Email' /> <button className='bg-blue-500 text-white font-bold py-3 px-5 rounded-lg'>Join</button></div></div>
      </div>
      <div className=' text-gray-400 h-fit mt-3'>&copy;2025 Evolve Cart All Right Reserved</div>
    </div>
  )
}

export default Footer