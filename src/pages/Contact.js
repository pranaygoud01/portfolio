import React from "react";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
function Contact() {
  return (
    <div className="m-20 p-12 max-lg:m-2 max-lg:p-8">
      <div className="w-full">
        <h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 font-extrabold max-lg:text-5xl">
          LET'S
          <br />
          WORK
          <br />
          TOGETHER
        </h1>
      </div>
      <div className="flex justify-between mt-20 max-lg:flex-col max-lg:gap-3 ">
        <div className="flex gap-2">
          <IoIosCall className="text-xl" />
          <p className=" text-xs">+91 8919262896</p>
        </div>
        <div className="flex gap-2">
          <BiLogoGmail className="text-xl" />
          <p className=" text-xs">pranaygoudpalle123@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <AiFillGithub className="text-xl" />
          <p className=" text-xs">@pranaygoud01</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
