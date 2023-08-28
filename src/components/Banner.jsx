"use client";
import { Carousel } from "flowbite-react";
const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        leftControl="<"
        rightControl=">"
        className="h-[calc(100dvh-0dvh)] md:h-[calc(100dvh-12dvh)]"
      >
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/22a13cd86bef48b28e9ff17642419a6c?v=bc38f902&t=w1920"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/ef0171bb255f4a068a6ac64e41ae821e?v=d2ab854c&t=w992"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/c92cb53c9cb04290892a3fbfb010ee74?v=4632931a&t=w992"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/99ad55d3eb954379ae1cf81369de8ad8?v=bd12262a&t=w992"
        />
      </Carousel>

      <div className="absolute left-[20%] top-[25%]">
        <div className=" w-3/4 ">
          <h1 className="text-7xl font-extrabold uppercase text-center text-white font-serif bg-black bg-opacity-20">
            explore the most luxerous hotel in the world
            <div className="">
              <button className="px-16 mt-10 text-2xl bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                Book Now
              </button>
            </div>
          </h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;