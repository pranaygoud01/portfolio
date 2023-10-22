import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const Menus = [
    {
      id: "projects",
      name: "Projects",
      path: "/projects",
    },
    {
      id: "resume",
      name: "Resume",
      path: "/resume",
    },
    {
      id: "contact",
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="p-5 flex justify-between text-xs items-center font-bold">
      <div className="">
        <Link to="/">
          <h1 className="text-2xl font-bold pl-32 max-lg:pl-2">P</h1>
        </Link>
      </div>
      <div className="mr-40 max-lg:mr-2 flex justify-between">
        <ul>
          {Menus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.path}
              className="p-2 cursor-pointer hover:border-b-[1px] border-black duration-200 "
            >
              {menu.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
