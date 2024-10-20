import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="m-24 p-12 border-t-[1px] border-neutral-400 flex justify-between max-lg:m-2 ">
      <div>
        <h1 className="font-semibold text-sm max-lg:text-[12px]">
          Developed by Pranay
        </h1>
        <p className="text-xs font-thin max-lg:text-[8px]">
          copyright&copy;2024
        </p>
      </div>
      <div className="flex w-2/12 justify-between text-xl  max-lg:w-6/12">
        <Link to="https://github.com/pranaygoud01" target="blank">
          <AiFillGithub className=" hover:scale-110 duration-200" />
        </Link>
        <Link to="https://www.instagram.com/pranayygoud/" target="blank">
          <AiOutlineInstagram className=" hover:scale-110 duration-200" />
        </Link>
        <Link to="https://www.linkedin.com/in/pranaygoud1229/" target="blank">
          <AiFillLinkedin className=" hover:scale-110 duration-200" />
        </Link>
        <Link to="mailto:pranaygoudpalle123@gmail.com">
          <BiLogoGmail className=" hover:scale-110 duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
