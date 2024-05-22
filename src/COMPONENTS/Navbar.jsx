import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import ProfileDropDown from "./ProfileDropDown";
import { useSelector } from "react-redux";
const Navbar = () => {
  const UserData = useSelector(state=> state.ProfileData.value)
 
  return (
    <nav className=" sticky top-0 h-20 shadow-md px-4 bg-white z-10 w-full">
      <div className="flex justify-between">
        <div className="flex space-x-4 p-5 align-middle ">
          <NavLink to="/MediumClone/" className="mt-2 w-fit">
            <img src={UserData.MediumLogo} alt="Home" className=" sm:block w-fit h-fit font-extrabold" />
          </NavLink>
          <form className="flex sm:space-x-4 sm:p-3 align-middle">
            <label htmlFor="search">
              <img src={UserData.SearchLogo} alt="Search" className="sm:w-6 sm:h-6 sm:mt-1 hidden md:block" />
            </label>
            <input
              type="search"
              placeholder="Search"
              className="sm:p-3 sm:h-8 shadow-inner outline-none sm:w-72 h-8"
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
          <ProfileDropDown className="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
