import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

function Project() {
  return (
    <div>
      <div className=" m-20 p-12 pb-32   max-lg:m-2">
        <h1 className=" mb-10 text-neutral-600 text-sm">FEATURED PROJECTS</h1>
        <div className="grid grid-cols-3 gap-10 font-thin max-lg:grid-cols-1">
          <div className=" hover:scale-110 duration-300 font-thin cursor-pointer border-2 rounded-md shadow-xl">
            <img
              src={project1}
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">Avion</h1>
              <p className="text-xs pt-2 pr-3 text-justify">
                A meticulously crafted responsive e-commerce website. Powered by
                ReactJS, styled with Tailwind CSS, and seamlessly navigated with
                React Router.
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-2 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/avion-app"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
              <a
                href="https://pranaygoud01.github.io/avion-app/"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2"
              >
                <AiOutlineLink className="text-lg" />{" "}
                <button className="ml-2">Live Demo</button>
              </a>
            </div>
          </div>
          <div className=" hover:scale-110 duration-300 font-thin cursor-pointer border-2 rounded-md shadow-xl">
            <img
              src="https://th.bing.com/th/id/OIG.DSOH2GjqZEll1O2aVgen?pid=ImgGn"
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">Book Recommendation System</h1>
              <p className="text-xs pt-2">
                Based on the historical borrowing data and feedback of the
                customers. Books will be suggested by the model to both
                customers and sellers.
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-1 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/book-recommendation-system"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
            </div>
          </div>
          <div className=" hover:scale-110 duration-300 font-thin cursor-pointer border-2 rounded-md shadow-xl">
            <img
              src={project2}
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">Calculator</h1>
              <p className="text-xs pt-2 pr-3 text-justify">
                In this project, we will explore the process of creating a basic
                calculator web application using the popular front-end library,
                React.
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-2 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/calculator"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
              <a
                href="https://pranaygoud01.github.io/calculator/"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2"
              >
                <AiOutlineLink className="text-lg" />{" "}
                <button className="ml-2">Live Demo</button>
              </a>
            </div>
          </div>
          <div className=" hover:scale-110 duration-300 font-thin cursor-pointer border-2 rounded-md shadow-xl">
            <img
              src={project3}
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">Studio M</h1>
              <p className="text-xs pt-2 pr-3 ">
                I created a dynamic and engaging full stack blog website by
                harnessing the power of React, Express, Node.js, and MySQL. This
                project showcases my ability
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-2 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/studiom"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
              <a
                href="https://pranaygoud01.github.io/studiom/"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2"
              >
                <AiOutlineLink className="text-lg" />{" "}
                <button className="ml-2">Live Demo</button>
              </a>
            </div>
          </div>
          <div className=" hover:scale-110 duration-300 font-thin cursor-pointer border-2 rounded-md shadow-xl">
            <img
              src="https://th.bing.com/th/id/OIG.NhZf4Tv087gdtckEbCg.?pid=ImgGn"
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">Blog</h1>
              <p className="text-xs pt-2 pr-3 ">
                I created a dynamic and engaging full stack blog website by
                harnessing the power of React, Express, Node.js, and MySQL. This
                project showcases my ability
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-2 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/blog"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
              <div className="flex justify-center items-center pt-4 pb-4 border-t-2">
                <AiOutlineLink className="text-lg" />{" "}
                <button className="ml-2">Live Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
