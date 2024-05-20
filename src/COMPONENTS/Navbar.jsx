import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import ProfileDropDown from "./ProfileDropDown";
const Navbar = () => {
  return (
    <nav className=" sticky top-0 h-20 shadow-md px-4 bg-white z-10 w-s">
      <div className="flex justify-between">
        <div className="flex space-x-4 p-5 align-middle ">
          <NavLink to="/MediumClone/" className="mt-2">
            <img src="/MediumClone/MediumLogo.png" alt="" className=" sm:block w-6 h-6 " />
          </NavLink>
          <form className="flex sm:space-x-4 sm:p-3 align-middle">
            <label htmlFor="search">
              <img src="/MediumClone/Search.png" alt="Search" className="sm:w-6 sm:h-6 sm:mt-1 hidden md:block" />
            </label>
            <input
              type="search"
              placeholder="Search"
              className="sm:p-3 sm:h-8 shadow-inner sm:w-25 outline-none w-20 h-8"
            />
          </form>
        </div>
        <div className="flex mt-6 sm:mt-9 space-x-3">
          <span className="hidden md:block">
            <NavLink to="/MediumClone/Write" className="flex">
              <FaRegEdit className="mt-1" />
              <span>Write</span>
            </NavLink>
          </span>
          <div className="flex space-x-3">
          <CiBellOn className="mt-1" />
          <ProfileDropDown className="mt-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
