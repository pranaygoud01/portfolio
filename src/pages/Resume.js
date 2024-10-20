import React from "react";

function Resume() {
  return (
    <div className="m-20 p-12 pt-6 max-lg:p-5 max-lg:m-2 ">
      <div className="flex justify-between mb-10">
        <h1 className="font-extrabold text-xl text-neutral-600">RESUME</h1>
        <a
          href="https://drive.google.com/file/d/1QSQYRETudWXHZ10luOCiRxLGReShnvDj/view?usp=sharing"
          download=""
        >
          {" "}
          <button className="text-xs pt-2 pb-2 pl-5 pr-5 font-medium bg-black text-white rounded-md hover:scale-110 duration-300">
            Download CV
          </button>
        </a>
      </div>
      <div className=" pt-1 pb-20 flex border-b-[1px] border-neutral-400 max-lg:flex-col">
        <div className="w-[20%]  max-lg:mt-9">
          <h1 className="text-neutral-600">EXPERIENCE</h1>
        </div>
        <div className="w-[80%] font-thin max-lg:mt-6">
          <div className="flex justify-between max-lg:flex-col">
            <h1 className="max-lg:mb-2">Web Developer (Remote) </h1>
            <p className="text-sm max-lg:text-xs">Nov-23 to Dec-23</p>
          </div>
          <div className="text-xs leading-8">
            <h1 className="text-blue-500  pt-1">Oasis Infobyte/Internship</h1>
            <p>-Developing web applications using React and Tailwind.</p>
            <p>
              -Fixing issues and developing Backend API's using Node Js &Express
              js
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex max-lg:m-2 max-lg:flex-col max-lg:mt-10">
        <div className="w-[20%]">
          <h1 className="text-neutral-600">EDUCATION</h1>
        </div>
        <div className="w-[80%] font-thin max-lg:w-[100%]">
          <div>
            <div className="flex justify-between  max-lg:flex-col">
              <h1 className="font-normal max-lg:mt-8 max-lg:text-sm">
                Sri Indu College of Engineering and Technology{" "}
              </h1>
              <p className="text-sm max-lg:text-xs max-lg:mt-2">
                Nov-2021 to May-2025
              </p>
            </div>
            <div className="text-xs leading-8">
              <h1 className="text-blue-500  pt-1">
                B-tech Information Technology
              </h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between max-lg:flex-col">
              <h1 className="font-normal max-lg:mt-2 max-lg:text-sm">
                Narayana Junior College{" "}
              </h1>
              <p className="text-sm max-lg:text-xs max-lg:mt-2">
                June-2019 to July-2021
              </p>
            </div>
            <div className="text-xs leading-8">
              <h1 className="text-blue-500  pt-1">Intermediate</h1>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between max-lg:flex-col">
              <h1 className="font-normal max-lg:mt-2 max-lg:text-sm">
                TS Model School
              </h1>
              <p className="text-sm max-lg:text-xs max-lg:mt-2">May-2019</p>
            </div>
            <div className="text-xs leading-8">
              <h1 className="text-blue-500  pt-1">SSC</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
