import React, { FC } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-fill 100px:flex items-center">
      <div className="absolute top-[100px] 100px:top-unset 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation rounded-full">
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
          <Image
            src={require("../../../public/assets/hero1.png")}
            alt="hero"
            className="hidden object-contain max-w-1000px w-90% max-w-1500px h-auto z-10"
          />
        </div>
        <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
          <h2 className="dark:text-white text-[3000000c7] text-[30px]  px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%]">
            Improve your Online Learning Experience Instantly
          </h2>
          <p className="dark:text-[#edfff4]">
            We have 40k+ courses from 100+ professionals in each field
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
