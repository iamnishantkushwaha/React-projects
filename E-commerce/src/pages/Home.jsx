import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
const Home = () => {

const category=[{img:"/public/images/laptops.jpg",
                 product:"Laptops"
},
{img:"/public/images/smartphones.jpg",
                 product:"Smartphones"
},
{img:"/public/images/gaming.jpg",
                 product:"Gaming"
},
{img:"/public/images/smartwearable.jpg",
                 product:"Smartwearable"
},
{img:"/public/images/smarthome.jpg",
                 product:"Smarthome"
}

]


const featured=[{
  img:"/public/images/UltraBookProX14Laptop.jpg",
  product:"UltraBook Pro X14 Laptop",
  description:"Powerful performance with a sleek design, fast SSD storage, and long battery life—perfect for work and entertainment.",
  price:"₹79,999"

},
{
  img:"/public/images/NoiseShieldWirelessHeadphones.png" ,
  product:"NoiseShield Wireless Headphones",
  description:"Experience immersive sound with active noise cancellation and all-day comfort for music and calls.",
  price:"₹4,999"

},
{
  img:"/public/images/SmartView4KLEDTV(55”).png",
  product:"SmartView 4K LED TV (55”)",
  description:"Stunning 4K visuals with HDR support and smart features for seamless streaming and gaming.",
  price:"₹42,999"

},
{
  img:"/public/images/SnapShotZMirrorlessCamera.png",
  product:"SnapShot Z Mirrorless Camera",
  description:"Capture professional-quality photos and videos with fast autofocus and compact portability.",
  price:"₹58,490"

},
{
  img:"/public/images/PowerFitProSmartwatch.png",
  product:"PowerFit Pro Smartwatch",
  description:"Track your fitness, monitor health stats, and stay connected with a stylish, waterproof design.",
  price:"₹6,999"

}
]

  return (
    <main className="h-fit  flex flex-col gap-10 pb-17 min-w-full bg-[#0F1821] py-1 px-10">
      {/* Hero Section */}
      <div className="h-1/2 w-full rounded-xl  my-10">
        <img
          className="rounded-2xl h-120 w-full object-cover object-center"
          src="\public\heroimage.png"
          alt="heroimg"
        />
      </div>

      {/* Shop by Category */}
      <div className="w-full h-65 flex flex-col gap-4 ">
        <div className="text-white flex justify-between items-center ">
          <h1 className="text-white font-bold text-3xl">Shop By Category</h1> <a className="text-blue-600 flex gap-1 items-center ">View all<IoIosArrowForward /></a>
        </div>
        <div className="w-full flex gap-20">
        { category.map((products)=>{
          return (<div className="relative">
            <img src={products.img} className="relative rounded-xl h-50 w-65" alt={products.product} />
            <h1 className="absolute left-20 bottom-4 text-white font-bold text-xl ">{products.product}</h1>
         </div>)
        })}
         
         
        </div>
      </div>

    <div className="w-full h-auto flex flex-col gap-4 ">
    <h1 className="text-white font-bold text-2xl">Featured Products</h1>
      <div className=" w-full flex justify-between ">

        {featured.map((products)=>{
          return( <div className="w-70 gap-2 rounded-xl  flex flex-col bg-[#1E293B] p-4">
        <img className="w-60" src={products.img} alt={products.product} />
        <div className="flex"><h1 className="flex text-[#EFBF04]"><FaStar /><FaStar /><FaStar /><FaStar /></h1><h1 className="flex "><FaRegStar /><h3 className="text-sm">(465)</h3></h1></div>
        <h1 className="text-white font-bold text-xl">{products.product}</h1>
        <p className="text-sm text-gray-500">{products.description}</p>
        <div className="flex justify-between items-center"><h1 className="text-green-400 text-lg font-bold">{products.price}</h1> <button className="p-3 font-bold  rounded-2xl text-sm  bg-white text-black">Add to Cart</button></div>
        </div>)
        })}
      




      </div>
      </div>
    </main>
  );
};

export default Home;
