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

    </div>
  );
};

export default Banner;