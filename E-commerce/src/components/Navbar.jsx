import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='min-w-full h-20  flex justify-between items-center text-white bg-[#1C2839] px-10'>
        <div className='flex items-center h-full justify-between w-2/5'>
            <div className='h-20  flex gap-2 items-center   text-white text-2xl font-bold'>Evolve Cart</div>
            <div className='bg-[#101922] flex items-center text-white focus:border-[1] border-white'><label htmlFor="search"><FaSearch className='text-2xl m-3'/></label><input className=" rounded-xl focus:outline-0 w-md bg-[#101922]  placeholder:text-[#38434F] h-10 "  type="text"  placeholder='Search For Products' id='search'/></div>
        </div>
         <div className='h-full items-center justify-evenly gap-3 w-2/5 flex '>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/categories'>Categories</NavLink>
         <NavLink to='/cart' className="flex gap-2" >Cart<FaShoppingCart className='text-2xl ' /></NavLink>
         <NavLink to='profile' className="flex gap-2">Profile<CgProfile className='text-2xl'/></NavLink>
         </div>
    </div>
  )
}

export default Navbar