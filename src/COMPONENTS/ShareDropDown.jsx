import React, { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { FaXTwitter ,FaLinkedin} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const ShareDropDown = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button onClick={toggleOpen}>
        <LuUpload className="ml-36" />
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm bg-white sticky w-40">
          <ul className="p-3 space-y-3 flex flex-col">
            <NavLink className="flex space-x-4"><IoIosLink/><span>Copy link</span></NavLink>
            <NavLink className="flex space-x-4"><FaXTwitter/><span>Share on X</span></NavLink>
            <NavLink className="flex space-x-4"><FaFacebook/><span>Share on Facebook</span></NavLink>
            <NavLink className="flex space-x-4"><FaLinkedin/><span>Share on Linkedin</span></NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareDropDown;
