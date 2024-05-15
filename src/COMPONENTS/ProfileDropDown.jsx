import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ProfileDropDown = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="flex flex-col ">
      <button onClick={toggleOpen} className="flex justify-end md:w-28">
        <FaUserCircle className="mt-1 mr-2" />
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm bg-white sticky">
          <ul className="p-3 space-y-3 flex flex-col">
            <NavLink className="space-x-3 flexp-2"><FiUser className="inline" /><span>Profile</span></NavLink>
            <NavLink to="/Library" className="space-x-3 flexp-2"><BsBookmarks className="inline"/><span>Library</span></NavLink>
            <NavLink to="/Stories/Drafts" className="space-x-3 flexp-2"><RiArticleLine className="inline" /><span>Stories</span></NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
