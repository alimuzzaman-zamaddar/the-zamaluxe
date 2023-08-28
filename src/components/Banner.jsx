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
          src="https://assets.kerzner.com/api/public/content/ef0171bb255f4a068a6ac64e41ae821e?v=d2ab854c&t=w1920"
        />
        <img
          alt="..."
          src="https://assets.kerzner.com/api/public/content/85486ace888a4ef28d5e7ecfdac5ee51?v=d74e9b04&t=w1920"
        />
        <img
          alt="..."
          src="https://cdn-imgix.headout.com/tour/33492/TOUR-IMAGE/a37fb255-1fdb-4bf3-93de-5723444d9150-17570-dubai-12-minutes-atlantis-helicopter-tour-04.jpg?w=1200&h=750&auto=compress%2Cformat&crop=faces&fit=min"
        />
      </Carousel>

      <div className="absolute left-[5%] top-[25%]">
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