import React, { useState } from "react";
import { FaUserCircle ,FaUserEdit} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";

const ProfileDropDown = () => {
  const UserData = useSelector((state) => state.ProfileData.value);
  const [isOpen, setisOpen] = useState(false);
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="flex flex-col ">
      <button
        onClick={toggleOpen}
        className="flex sm:w-32 sm:-mt-2"
      >
        {UserData.DP ? (
          <img src={UserData.DP} alt="" className="h-10 w-10 rounded-[50%]" />
        ) : (
          <FaUserCircle className="mt-1 mr-2" />
        )}
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm bg-white sticky w-36">
          <div className="p-3 space-y-3 flex flex-col -mr-20">
            <NavLink
              to="/MediumClone/"
              className="space-x-3 flex p-2"
            >
              <IoHomeOutline className="inline mt-[5px]" />
              <span>Go to home</span>
            </NavLink>
            <NavLink
              to="/MediumClone/ProfilePage/Home"
              className="space-x-3 flex p-2"
            >
              <FiUser className="inline mt-[5px]" />
              <span>Profile</span>
            </NavLink>
            <NavLink
              to="/MediumClone/Library/YourLists"
              className="space-x-3 flex p-2"
            >
              <BsBookmarks className="inline mt-[5px]" />
              <span>Library</span>
            </NavLink>
            <NavLink
              to="/MediumClone/Stories/Drafts"
              className="space-x-3 flex p-2"
            >
              <RiArticleLine className="inline mt-[5px]" />
              <span>Stories</span>
            </NavLink>
            <NavLink
              to="/MediumClone/ProfilePage/EditProfile"
              className="space-x-3 flex p-2"
            >
              <FaUserEdit className="inline mt-[5px]" />
              <span>Edit Profile</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
