import Link from "next/link";
import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="">
    <div className="bg-[#001446] ">
    <div className="   border-b-[1px] border-gray-600">
      <div className="md:flex items-center p-5 pb-0 md:max-w-[1480px] mx-auto justify-between ">
        <div className="flex items-center text-white">
          <BiSolidPhoneCall className="mr-5 animate-bounce" />
          <FaEnvelope  className="mr-5 animate-bounce"/>
          <BiSolidMap className="mr-5 animate-bounce"/>
          <p className="md:text-sm ">EXPLORE THE DESTINATION</p>
        </div>
        <div className="text-center text-[#dcb84e] font-serif mr-16 ">
          <h1 className="md:text-4xl animate-pulse">AL ZAMALUXE</h1>
          <h2 className="text-xs mb-3">The Royel</h2>
          {/* <p className="text-xs">Dhaka</p> */}
        </div>
        <div className="">
          <button className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white">Book Now</button>
        </div>
      </div>

    </div>
          <div className=" md:flex w-3/5 mx-auto justify-between py-3 text-white text-sm">
          <Link href="/">HOME</Link>
          <Link href="/Stays">STAYS</Link>
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