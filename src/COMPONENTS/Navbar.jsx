import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import ProfileDropDown from "./ProfileDropDown";
const Navbar = () => {
  return (
    <nav className=" sticky top-0 h-20 shadow-md px-4 bg-white z-10">
      <div className="flex justify-between">
        <div className="flex space-x-4 p-5 align-middle">
          <NavLink to="/">
            <img src="/MediumLogo.png" alt="" />
          </NavLink>
          <form className="flex space-x-4 p-3 align-middle">
            <label htmlFor="search">
            <img src="/Search.png" alt="Search" className="w-6 h-6 mt-1" />
            </label>
            <input
              type="search"
              placeholder="Search"
              className="p-3 h-8 shadow-inner"
            />
          </form>
        </div>
        <div className="flex justify-between space-x-4 mt-9">
        <span className="flex space-x-2">
           <NavLink to="/Write" className="flex">
           <FaRegEdit className="mt-1" /><span>Write</span>
           </NavLink>
            </span>
        <CiBellOn className="mt-1"/>
        <ProfileDropDown className="mt-1"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
