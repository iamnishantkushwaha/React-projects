import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useState } from "react";

import { SiPaytm } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Checkoutpage = () => {
  const [isactiveshipping, Setisactiveshipping] = useState(true);
  const [isactivepayment, Setisactivepayment] = useState(true);
  const [paymentmode, setpaymentmode] = useState("Credit Card");
  const navigate=useNavigate()
  return (
    <div className="min-h-screen  h-screen px-10 bg-[#101922]  p-20 flex justify-between">
      <div className="flex w-3/5 flex-col gap-3 text-white ">
        <div className="w-full h-auto  p-5 flex rounded-lg bg-[#101826] border-2  border-white/20 flex-col gap-3">
          <div className="flex justify-between  border-b-2 border-white/20 pb-3">
            <h1 className="text-xl flex gap-2 text-white">
              <div className="px-2.5 h-fit w-fit rounded-full  text-center bg-blue-500 text-white ">
                1
              </div>{" "}
              Shipping Address
            </h1>
            <IoIosArrowUp
              onClick={() => {
                Setisactiveshipping(!isactiveshipping);
              }}
              className={`${isactiveshipping ? "hidden" : null}`}
            />
            <IoIosArrowDown
              onClick={() => {
                Setisactiveshipping(!isactiveshipping);
              }}
              className={`${!isactiveshipping ? "hidden" : null}`}
            />
          </div>
          <div
            className={` ${
              !isactiveshipping ? "hidden" : null
            } grid grid-cols-2 gap-x-4 gap-y-5`}
          >
            <div className="flex flex-col ">
              <label htmlFor="FullName" className="text-sm uppercase">
                Full Name
              </label>
              <input
                type="text"
                className="border p-2 rounded-xl border-white/10 focus:outline-0"
                placeholder="Enter Name"
                id="Full Name"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="PhoneNumber" className="text-sm uppercase">
                Phone Number
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="border p-2 rounded-xl border-white/10 focus:outline-0"
                placeholder="9865741236"
                id="PhoneNumber"
                maxLength={10}
              />
            </div>

            <div className="w-235 flex flex-col">
              <label htmlFor="Street address " className="text-sm uppercase">
                Street Address
              </label>
              <input
                type="text"
                className="border p-2 rounded-xl border-white/10 focus:outline-0"
                placeholder="Gurudev Colony"
                id="Street Adress"
              />
            </div>
            <br />
            <div className="flex flex-col ">
              <label htmlFor="City" className="text-sm uppercase">
                City
              </label>
              <input
                type="text"
                className="border p-2 rounded-xl border-white/10 focus:outline-0"
                placeholder="Jabalpur"
                id="City"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="Phone Number" className="text-sm uppercase">
                Zip/Postal Code
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="border p-2 rounded-xl border-white/10 focus:outline-0"
                placeholder="Zip/Postal Code"
                id="PostalCode"
                maxLength={6}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#101826] p-5  rounded-lg  border-2 border-white/20 flex flex-col gap-3">
          <div className="flex justify-between  border-b-2 border-white/20 pb-3">
            <h1 className="text-xl flex gap-2 text-white">
              <div className="px-2.5 h-fit w-fit rounded-full  text-center bg-blue-500 text-white ">
                2
              </div>
              Payment Method
            </h1>
            <IoIosArrowUp
              onClick={() => {
                Setisactivepayment(!isactivepayment);
              }}
              className={`${!isactivepayment ? "hidden" : null}`}
            />
            <IoIosArrowDown
              onClick={() => {
                Setisactivepayment(!isactivepayment);
              }}
              className={`${isactivepayment ? "hidden" : null}`}
            />
          </div>
          <div
            className={`${
              isactivepayment ? "hidden" : null
            } grid grid-cols-2 gap-x-4 gap-y-5 `}
          >
            <button
              onClick={() => {
                paymentmode == "Credit Card"
                  ? setpaymentmode("upi")
                  : setpaymentmode("Credit Card");
              }}
              className={` ${
                paymentmode == "Credit Card"
                  ? "border-blue-600"
                  : "border-white/10"
              } flex gap-1 p-3 border  rounded-xl items-center justify-center `}
            >
              <FaRegCreditCard
                className={`${
                  paymentmode == "Credit Card" ? "text-blue-600" : null
                } text-xl`}
              />{" "}
              Credit Card
            </button>
            <button
              onClick={() => {
                paymentmode == "Credit Card"
                  ? setpaymentmode("upi")
                  : setpaymentmode("Credit Card");
              }}
              className={` ${
                paymentmode == "upi"
                  ? "text-white-600 border-white font-bold"
                  : "border-white/10"
              } flex gap-1  p-3 border  rounded-xl items-center justify-center`}
            >
              <SiPaytm className="text-2xl" /> Upi
            </button>
            <div className="flex flex-col">
              <label htmlFor="CreditCard" className="uppercase text-sm">
                Card Number
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="border uppercase p-2 w-235 rounded-xl  border-white/10 focus:outline-0"
                placeholder="0000 0000 0000 0000"
                id="CreditCard"
                maxLength={16}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label htmlFor="Expiry" className="uppercase text-sm">
                Expiry date
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="border-2 p-2  rounded-xl border-white/10 focus:outline-0"
                placeholder="MM/YY"
                id="Expiry"
                maxLength={4}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="CVV" className="text-sm">
                CVV
              </label>
              <input
                type="text"
                className="border-2 p-2 rounded-xl border-white/10 focus:outline-0"
                placeholder="123"
                id="CVV"
                maxLength={3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#101826] w-1/3 p-5 min-h-fit max-h-5/6 rounded-xl border-2 border-white/20 gap-4">
        <h1 className="text-2xl font-bold text-white">Review Order</h1>
        <div className="flex flex-col max-h-1/2  scroller overflow-y-scroll gap-4">
          <div className="flex gap-3">
            <img
              className="h-20 w-25 rounded"
              src="/public/images/download.jpg"
              alt="download"
            />
            <div className="flex flex-col h-full  justify-center w-3/5">
              <h2 className="font-bold text-white text-xl">Title</h2>
              <h3 className="text-sm text-gray-500">Qty:1</h3>
            </div>
            <h1 className=" h-full flex items-end  font-bold text-xl text-white">
              $456
            </h1>
          </div>

          <div className="flex gap-3">
            <img
              className="h-20 w-25 rounded"
              src="/public/images/download.jpg"
              alt="download"
            />
            <div className="flex flex-col h-full  justify-center w-3/5">
              <h2 className="font-bold text-white text-xl">Title</h2>
              <h3 className="text-sm text-gray-500">Qty:1</h3>
            </div>
            <h1 className=" h-full flex items-end  font-bold text-xl text-white">
              $456
            </h1>
          </div>
        </div>
        <div className="flex justify-between mt-5 p-2 border-b-2 text-gray-400 border-white/20">
          <ul className="leading-8">
            <li>Sub Total</li>
            <li>Shipping</li>
            <li>Tax Estimate</li>
          </ul>
          <ul className="leading-8">
            <li>$172.99</li>
            <li>Free</li>
            <li>$123</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-bold">
            <h1 className="text-white text-xl">Total</h1>
            <h1 className="text-green-600 text-3xl">$1256</h1>
          </div>
          <button onClick={()=>{
            navigate("/orderconfirmation")
          }} className="bg-blue-500 rounded-xl px-40 py-3 flex gap-4 text-xl text-white font-bold">
            Place Order <AiFillSafetyCertificate className="text-2xl" />
          </button>
          <h3 className="uppercase text-gray-600 text-center mb-4 ">
            Secure Payment ssl Encrypted
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
