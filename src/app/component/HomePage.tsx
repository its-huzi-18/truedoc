import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose weights as needed
  variable: "--font-poppins", // CSS variable for custom usage
});
const HomePage = () => {
  return (
    <div className={`${poppins.variable} font-poppins ` }>
      <div className="mx-11">
        <div className="relative flex justify-center items-center">
        <Image
        className="w-[1240px] h-[679px] absolute top-0" 
        src={'/images/Frame.png'}
        width={1240}
        height={879}
        alt="frame"
        />
        </div>
        <div className="h-[6px] bg-[#193A65]"></div>
        <div className="h-[6px] bg-[#63D6C0]"></div>
        <div className="flex justify-between mx-7">
        <div>
          <Image
            className="my-4"
            width={29}
            height={23}
            src={"/images/heart.png"}
            alt="heart"
            />
          <h2 className="font-medium w-[88px] h-[67px] text-[24px] text-customBlue leading-[25px]">
            YOUR HEALTH HUB
          </h2>
        </div>
        <div>
          <Image
            className="my-4"
            width={29}
            height={23}
            src={"/images/heart.png"}
            alt="heart"
            />
            <div className="relative flex justify-center items-center">
                <Image 
                className="mt-4"
                src={'/images/lightHeart.svg'}
                width={105}
                height={85}
                alt="lightHeart"
                />
          <div className="-mt-1 absolute font-bold text-center text-[12px] text-[#233159] leading-[12px]">
         <h2> DISCOVER</h2>
          <h2>OUR MISSION</h2>
          </div>
            </div>
        </div>
        <Image
        className="mx-2 -mt-14" 
        src={'/images/design.svg'}
        width={276}
        height={49}
        alt="design"
        />  
        <div>
            <div className=" flex gap-2 items-center">
          <Image
            className="my-4"
            width={29}
            height={23}
            src={"/images/heart.png"}
            alt="heart"
            />
            <h2 className="text-[16px] font-medium text-[#233159]">Services</h2>
            </div>
          <h2 className="font-medium w-[88px] text-[18px] text-customBlue leading-[27px]">
          Tailored
Healthcare
Plans          </h2>
        </div>
            <div className="flex flex-col gap-3">
        <div className=" flex gap-2 items-center">
          <Image
            className="my-4"
            width={29}
            height={23}
            src={"/images/heart.png"}
            alt="heart"
            />
            <h2 className="text-[16px] font-medium text-[#233159]">Our Story</h2>
            </div>
            <div className="-mt-3 relative flex justify-center items-center">
            <Image 
            className="absolute"
            src={'/images/circle.svg'}
            width={100}
            height={100}
            alt="circle"
            />
            <div className=" rounded-full w-[85px] h-[85px] bg-[#233159] flex justify-center items-center ">
<h2 className="font-bold text-[15px] leading-[15px] text-[#FFFFFF] text-center">
FROM
VISION
TO
REALITY
</h2>
            </div>
            </div>          
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Image 
            className="h-[350px] w-screen relative -top-[4.5rem]"
            src={'/images/doctor.svg'}
            width={900}
            height={400}
            alt="doctor"
            />
            <h2 className="text-[67px] font-light text-[#233159] -mt-[90px]">Your Health in Your Hands</h2>
            <h2 className="font-extrabold text-[99px]  text-customBlue -mt-12">Anytime, Anywhere</h2>
            </div>
      </div>
    </div>
  );
};

export default HomePage;
