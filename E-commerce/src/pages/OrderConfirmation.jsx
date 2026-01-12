import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const OrderConfirmation = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen flex justify-center bg-[#101922] items-center px-10">
      <div className="bg-[#101922] w-4/10 h-fit flex flex-col gap-10 py-15 px-5 rounded-xl items-center ">
        <h1>
          <RiVerifiedBadgeFill className="text-blue-600 text-center text-9xl" />
        </h1>
        <h1 className="text-white text-4xl font-bold">Order Confirmed!</h1>
        <p className="text-gray-500 font-semibold text-center">Your order is on the way,We have sent the receipt to your inbox.</p>
        <div className="h-1/4 w-full p-8 rounded-xl flex flex-col justify-center border border-white/5 items-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-500 text-sm">ORDER ID</h3>
            <h1 className="text-white text-2xl font-bold">#TS-7788778</h1>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-500 text-sm">ESTIMATED DELIVERY</h3>
            <h1 className="text-white text-2xl font-bold">26-28 OCTOBER 2026</h1>
          </div>
        </div>
        <div className="font-bold gap-8 flex justify-between items-center"><button onClick={()=>{
            navigate("/")
        }} className="bg-blue-500 px-6 py-3 text-white rounded-xl flex items-center gap-3">Continue Shopping<FaArrowRight /></button><button className="text-white rounded-xl  px-6 py-3 flex items-center border border-white/10 gap-3"><FaHistory />View Order History</button></div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
