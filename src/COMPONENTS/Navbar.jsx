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
        <div className="flex space-x-4 p-3 sm:p-5 align-middle ">
          <NavLink to="/MediumClone/" className="mt-4 sm:mt-3 w-fit">
            <img src={UserData.MediumLogo} alt="Home" className="sm:block w-7 h-7 font-extrabold" />
          </NavLink>
          <form className="flex sm:space-x-4 sm:p-3 align-middle">
            <label htmlFor="search">
              <img src={UserData.SearchLogo} alt="Search" className="sm:w-6 sm:h-6 sm:mt-1 hidden md:block" />
            </label>
            <input
              type="search"
              placeholder="Search"
              className="sm:p-3 sm:h-8 shadow-inner outline-none w-20 sm:w-72 h-8 sm:mt-0 mt-3"
            />
          </form>
        </div>
        <div className="flex justify-between mt-6 sm:mt-9 space-x-3">
          <span className="hidden md:block">
            <NavLink to="/MediumClone/Write" className="flex">
              <FaRegEdit className="mt-1" />
              <span>Write</span>
            </NavLink>
          </span>
          <div className="flex space-x-3">
          <ProfileDropDown className="w-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
