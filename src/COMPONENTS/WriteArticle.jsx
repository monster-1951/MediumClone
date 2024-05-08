import React from "react";
import { NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import DropDown from "./DropDown";

const WriteArticle = () => {
  return (
    <>
      <nav className="flex justify-between">
        <NavLink to="/" className="flex">
          <img src="MediumLogo.png" alt="" />
          <span className="p-5">Draft in User786</span>
        </NavLink>
        <div className="flex p-5 justify-around space-x-4">
          <NavLink to="/">
            <button className="bg-green-400 text-white rounded-2xl p-2 text-xs font-bold">
              Publish
            </button>
          </NavLink>
          <NavLink>
            <DropDown />
          </NavLink>
          <NavLink>
            <CiBellOn />
          </NavLink>
          <NavLink>
            <FaUserCircle className="" />
          </NavLink>
        </div>
      </nav>

      <input
        type="text"
        placeholder="Title"
        className="w-full h-20 text-5xl p-5 text-pretty"
      />
      <hr />
      <textarea
        placeholder="Tell your story..."
        className="placeholder:text- w-full h-56 p-5 text-justify text-pretty"
      />
    </>
  );
};

export default WriteArticle;
