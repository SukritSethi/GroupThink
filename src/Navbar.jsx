import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/media/logo.png";

const Navbar = () => {
  return (
    <div className=" w-full h-16 bg-white-main sticky z-20 top-0 flex justify-between">
      <NavLink
        className={({ isActive }) =>
          isActive ? "h-16" : "h-16"
        }
        to="/"
      >
        <div className="h-16 pl-10">
          <img src={logo} className=" object-cover w-24 h-16 " alt="" />
        </div>
      </NavLink>

      <div className="flex justify-center pr-20">
        <NavLink
          to="/blog"
          className={({ isActive }) => {
            return isActive ? "underline text-red-main " : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer hover:text-blue-main hover:underline">
            Blog
          </div>
        </NavLink>

        <NavLink
          to="/learn"
          className={({ isActive }) => {
            return isActive ? "underline text-red-main" : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer hover:text-blue-main hover:underline">
           Learn
          </div>
        </NavLink>

        <NavLink
          to="/teach"
          className={({ isActive }) => {
            return isActive ? "underline text-red-main" : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer hover:text-blue-main hover:underline">
            Teach
          </div>
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
