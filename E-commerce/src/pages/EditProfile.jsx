import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
    const navigate=useNavigate()
  return (
    <div className=" min-h-screen bg-[#101922] flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl text-white font-bold">Edit Profile</h1>
      <div className="bg-[#1A242F] rounded-lg h-10/12 w-1/3">
        <div className="h-1/3 w-full flex flex-col gap-2 p-4 items-center">
          <img
            className="h-35 w-35 rounded-full"
            src="./public/images/download.jpg"
            alt=""
          />
          <h1 className="text-white font-bold text-2xl">Name</h1>
          <button className="p-2 bg-gray-500 rounded-xl text-white">
            Change Photo
          </button>
        </div>
        <div className="flex flex-col text-white p-4 px-8 gap-2">
          <h1 className="font-bold text-white flex gap-2 items-center">
            <IoMdContact className="text-2xl text-blue-600" />
            Personal Information
          </h1>

          <div className="flex flex-col">
            <label htmlFor="Fullname" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              className="outline-0 text-white bg-[#151E2C] p-2 rounded-xl "
              placeholder="Enter Name"
              id="Fullname"
              
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>
            <input
              type="email"
              className="outline-0 p-2 text-white bg-[#151E2C] rounded-xl"
              placeholder="Enter email"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Phonenumber" className="text-sm">
             Phone Number
            </label>
            <input
              type="text"
              className="outline-0 p-2 text-white bg-[#151E2C] rounded-xl"
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter Phone Number"
              id="phonenumber"
            />
          </div>
        </div>
        <div>
          <h1 className=" flex items-center font-bold text-white p-4 gap-2">
            <IoIosLock  className="text-2xl text-blue-600 "/> Change Password
          </h1>
          <div className="flex gap-4 p-4  text-white">
            <div className="flex flex-col w-1/2">
              <label htmlFor="Currentpassword" className="text-sm">
                Current Password
              </label>
              <input
                type="password"
                className="outline-0 p-2 text-white bg-[#151E2C] rounded-xl"
                placeholder="Enter Current password"
                id="Currentpassword"
              />
            </div>
            <div className="flex flex-col  w-1/2">
              <label htmlFor="Newpassword" className="text-sm">
                New Password
              </label>
              <input
                type="password"
                className="outline-0 p-2 text-white bg-[#151E2C] rounded-xl"
                placeholder="Enter New password"
                id="Newpassword"
              />
            </div>
          </div>
        </div>
        <div className="flex bg-[#141C25] gap-10 justify-end p-5"><button className="text-gray-600 font-bold ">Cancel</button><button onClick={()=>{
            navigate("/profile")
            alert("Profile Changes Saved")
        }} className="py-2 px-6 font-bold bg-blue-500 rounded-lg  text-white">Save Changes</button></div>
      </div>
    </div>
  );
};

export default EditProfile;
