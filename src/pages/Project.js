import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
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
              src="https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2022/07/Book-Recommendation-System-using-Python.png?fit=1920%2C1080&ssl=1"
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
                Developed a responsive web application for an architectural firm
                using React and React Router.Leveraged React Hooks to manage
                state and optimize performance.
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-2 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/studio-m"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
              <a
                href="https://pranaygoud01.github.io/studio-m/"
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
              src={project4}
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">News application</h1>
              <p className="text-xs pt-2 pr-3 ">
                Developed a news application using React to fetch and display
                real-time news from external remote APIs.Utilized Hooks for
                efficient state management and data handling across components
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
          <div className=" hover:scale-110 duration-300 font-thin cursor-pointer border-2 rounded-md shadow-xl">
            <img
              src="https://www.krvsoft.com/images/Product/p_jobportal.png"
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">Placement Management System</h1>
              <p className="text-xs pt-2">
                Developed a robust system to manage and maintain student
                placement details. Implementing full CRUD operations using Java
                as the backend language Utilized MySQL as the relational
                database.Integrated Postman for testing and validating API
                endpoints, ensuring seamless data communication
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-1 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/PlacementMngtSystem"
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
              src="https://miro.medium.com/v2/resize:fit:1200/0*nZs5A6K_GBhbBJ9u.jpg"
              className="w-full h-56 object-cover rounded-t-md"
              alt="img"
            />
            <div className="pt-5 pl-4">
              <h1 className="text-sm font-bold">
                {" "}
                CRUD Operations with Express, MongoDB, and Node.js! 🛠️
              </h1>
              <p className="text-xs pt-2">
                Built a RESTful API that allows users to Create, Read, Update,
                and Delete records seamlessly. Leveraged Mongoose for schema
                modeling and implemented robust error handling for smooth
                operations. 📈 This project deepened my understanding of backend
                development, including database connectivity, API routing, and
                asynchronous programming in JavaScript. Excited to keep
                exploring and building more!
              </p>
            </div>
            <div className="font-thin mt-6 text-xs grid grid-cols-1 rounded-b-md ">
              <a
                href="https://github.com/pranaygoud01/CRUDbyNodejsExpressMongoDB"
                target="blank"
                className="flex justify-center items-center pt-4 pb-4 border-t-2 border-r-2 "
              >
                <AiFillGithub className="text-lg" />{" "}
                <button className="ml-2">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
