import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { TbHeadphonesFilled } from "react-icons/tb";
const Categories = () => {
  const categories = [
    {
      img: "/public/images/laptopsandcomputing.png",
      name: "Laptops and Computing",
      itemscount: 1240,
    },
    {
      img: "public/images/smartphoneandtablets.jpg",
      name: "Smartphones and Tablets",
      itemscount: 980,
    },
    {
      img: "public/images/pccomponents.jpg",
      name: "PC Components",
      itemscount: 2150,
    },
    {
      img: "public/images/audioandsounds.jpg",
      name: "Audio and Headphones",
      itemscount: 450,
    },
    {
      img: "public/images/smartphoneandiot.png",
      name: "SmartHome and IOT",
      itemscount: 320,
    },
    {
      img: "public/images/gamingaccessories.png",
      name: "Gaming Accessories",
      itemscount: 670,
    },
    {
      img: "public/images/smartwearable.jpg",
      name: "Wearables",
      itemscount: 180,
    },
    {
      img: "public/images/printersandscanners.png",
      name: "Printers and Scanners",
      itemscount: 120,
    }
  ];
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-[#101922] w-full px-10">
      <div className="flex h-40 ">
        <div className="flex flex-col w-1/2  justify-end gap-2 pr-25">
          <h1 className="text-5xl font-bold text-white">Browse Categories</h1>
          <p className="text-gray-400">
            Browse Our Wide Selection of High Performance Hardware aand
            Accessories
          </p>
        </div>
        <div className="w-1/2  justify-end flex items-end ">
          <div className="bg-gray-700 rounded-xl flex items-center justify-center">
            <IoFilterSharp className="text-xl mx-2 text-white" />
            <input
              type="text"
              className="focus:outline-none p-3 rounded-xl w-96  text-gray-400 bg-gray-700 "
              placeholder="Search For a Category..."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10 gap-y-6 gap-x-20">
        {categories.map((product)=>{
            return(<div className=" flex flex-col h-fit pb-5 gap-2 w-85 bg-[#0F172A] rounded-xl">
          <img
            src={product.img}
            className="h-60 rounded-t-xl object-cover "
            alt={product.name}
          />
          <h1 className="font-bold text-white px-4 text-2xl mt-2">
           {product.name}
          </h1>
          <div className="flex items-center text-gray-600 font-bold px-4 justify-between">
            <h3>{product.itemscount} items</h3>
            <FaArrowRight />
          </div>
        </div>)
        })}
        
      </div>
      <div  className="flex bg-[#1A5EDF] mb-15 rounded-[15px] justify-between p-15 h-fit"><div className="flex w-1/2  gap-5 flex-col  pr-29"><h1 className="text-3xl text-white font-bold ">Can't Find What You Are Looking For?</h1>
      <p className="text-white/80 font-semibold text-lg">Our experts are available 24/7 to help you build your dream setup or find the perfect tech gift</p>
      <div className="flex gap-13 items-center"><button className="bg-white p-3 font-bold rounded-2xl text-blue-600">Chat With Support</button><button className=" p-3 rounded-2xl font-bold text-white border-white border-2 text-whute bg-transparent">View Product Guide</button></div></div>
  <TbHeadphonesFilled className="text-[13vw] mr-3 rotate-15 text-white/20" />
</div></div>
  );
};

export default Categories;
