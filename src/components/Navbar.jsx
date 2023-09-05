import Link from "next/link";
import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="">
    <div className="bg-[#001446]">
    <div className="border-b-[1px] border-gray-600 text-center">
      <div className="md:flex items-center p-5 pb-0 md:max-w-[1480px] mx-auto justify-between ">
        <div className="md:flex text-center text-white">
          <div className="flex justify-center items-center">
          <BiSolidPhoneCall className="mr-5 animate-bounce" />
          <FaEnvelope  className="mr-5 animate-bounce"/>
          <BiSolidMap className="mr-5 animate-bounce"/>
          </div>
          <p className="md:text-sm ">EXPLORE THE DESTINATION</p>
        </div>
        <div className=" text-[#dcb84e] text-center ml-16 font-serif mr-16 ">
          <h1 className="md:text-4xl  animate-pulse">AL ZAMALUXE</h1>
          <h2 className="text-xs mb-3">The Royal</h2>
        </div>
        <div className="">
          <button className="md:px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white">Book Now</button>
        </div>
      </div>

    </div>
          <div className="grid grid-cols-1 md:grid-cols-6 text-center md:w-3/5 mx-auto  py-3 text-white text-sm">
          <span><Link href="/">HOME</Link></span>
          <span><Link href="/Stays">STAYS</Link></span>
          <Link href='/Dinning'>DINNING</Link>
          <Link href='/Entertainment'>ENTERTAINMENT</Link>
          <Link href='/Adventure'>ADVENTURES</Link>
          <Link href='/Foods'>FOODS</Link>
        </div>
    </div>
    </div>
  );
};

export default Navbar;