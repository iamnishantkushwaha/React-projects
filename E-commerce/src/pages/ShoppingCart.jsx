import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const ShoppingCart = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen w-full bg-[#101922]   px-10">
      <div className="flex items-end h-40">
        <div className="flex w-1/2 gap-1 flex-col">
          <h1 className="font-bold text-5xl text-white">Your Cart</h1>
          <p>Review Your Selection Before Checkout</p>
        </div>
        <div className="w-1/2 text-end">
          <p>3 item in your cart</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-3/5 h-150 flex flex-col gap-3 ">
          <div className="h-1/3 w-full flex bg-[#101826] items-center gap-2 border border-white/30 rounded-xl">
            <div className="h-full w-55 p-4 rounded-2xl"><img className="object-contain rounded-2xl" src="public/images/download (1).jpg" alt="" /></div>
            <div className="w-1/2">
              <h1 className="text-white text-2xl font-bold">Product Name</h1>
              <p className="text-lg text-gray-500">description</p>
              <h1 className="font-bold text-2xl text-green-500">Price</h1>
            </div>
            <div className="flex flex-col  ml-20 items-end gap-3">
                <RiDeleteBinLine className="text-red-500 text-3xl "/>
              <div className=" rounded-xl p-1">
                <button className="px-3 py-1 bg-gray-600 text-white text-xl rounded-lg font-bold">-</button><input type="Number" className=" numberbtn focus:outline-0 w-15  font-bold text-white py-2 px-5" /><button className="px-3 py-1 bg-gray-600 text-white text-xl rounded-lg font-bold">+</button>
              </div>
              
            </div>
          </div>

          
           <div className="h-1/3 w-full flex bg-[#101826] items-center gap-2 border border-white/30 rounded-xl">
            <div className="h-full w-55 p-4 rounded-2xl"><img className="object-contain rounded-2xl" src="public/images/download (1).jpg" alt="" /></div>
            <div className="w-1/2">
              <h1 className="text-white text-2xl font-bold">Product Name</h1>
              <p className="text-lg text-gray-500">description</p>
              <h1 className="font-bold text-2xl text-green-500">Price</h1>
            </div>
            <div className="flex flex-col  ml-20 items-end gap-3">
                <RiDeleteBinLine className="text-red-500 text-3xl "/>
              <div className=" rounded-xl p-1">
                <button className="px-3 py-1 bg-gray-600 text-white text-xl rounded-lg font-bold">-</button><input type="Number" className=" numberbtn focus:outline-0 w-15  font-bold text-white py-2 px-5" /><button className="px-3 py-1 bg-gray-600 text-white text-xl rounded-lg font-bold">+</button>
              </div>
              
            </div>
          </div>

           <div className="h-1/3 w-full flex bg-[#101826] items-center gap-2 border border-white/30 rounded-xl">
            <div className="h-full w-55 p-4 rounded-2xl"><img className="object-contain rounded-2xl" src="public/images/download (1).jpg" alt="" /></div>
            <div className="w-1/2">
              <h1 className="text-white text-2xl font-bold">Product Name</h1>
              <p className="text-lg text-gray-500">description</p>
              <h1 className="font-bold text-2xl text-green-500">Price</h1>
            </div>
            <div className="flex flex-col  ml-20 items-end gap-3">
                <RiDeleteBinLine className="text-red-500 text-3xl "/>
              <div className=" rounded-xl p-1">
                <button className="px-3 py-1 bg-gray-600 text-white text-xl rounded-lg font-bold">-</button><input type="Number" className=" numberbtn focus:outline-0 w-15  font-bold text-white py-2 px-5" /><button className="px-3 py-1 bg-gray-600 text-white text-xl rounded-lg font-bold">+</button>
              </div>
              
            </div>
          </div>
        </div>


        <div className="p-4 py-20  flex flex-col  border border-white/30 rounded-xl gap-6 w-1/4 bg-[#0F172A]"><h1 className="font-bold text-white text-2xl">Order Summary</h1>
        <div className="flex h-50 justify-between text-white border-white/20 border-b"><ul className="leading-8">
            <li>Subtotal</li>
            <li>Estimated Shipping</li>
            <li>Tax Estimate</li>
        </ul>
        <ul className="leading-8">
            <li>5236</li>
            <li>free</li>
            <li>569</li>
        </ul></div>
        <div className="flex justify-between font-bold text-white text-xl"><h1>Total</h1>
        <h1 className="text-3xl text-white">2563</h1></div>
         <button className="text-white p-4  mt-6 font-bold bg-blue-600 rounded-xl" onClick={()=>{
          navigate("/checkout")
         }}>Proceed to Checkout</button>
         <div className="text-center">
            <p className="text-gray-500 leading-0">Secure Checkout Powered By Stripe</p>
         </div>
       </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
