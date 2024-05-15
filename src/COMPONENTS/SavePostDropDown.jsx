import React, { useState } from "react";
import { IoBookmarkOutline, IoBookmarkSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";

const SavePostDropDown = () => {
  const [saved, setsaved] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [ischecked,setisChecked] = useState(false)
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="flex flex-col justify-end">
      <button
        onClick={() => {
          setsaved(!saved);
          toggleOpen();
        }}
        className="flex justify-end w-72"
      >
        {!saved ? <IoBookmarkOutline /> : <IoBookmarkSharp />}
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm bg-white sticky w-72 p-3">
          <div className="p-3 space-y-3 flex flex-col">
            <p className="flex space-x-4 justify-between">
              <span className="flex space-x-3">
                <input type="checkbox"
                 onChange={() => {
                  setisChecked(!ischecked)
                }
                }
                checked={ischecked}/>
                <span>Reading list</span>
              </span>
              <span>
                <FaLock />
                {/* <FaUnlock /> */}
              </span>
            </p>
          </div>
          <hr />
          <NavLink to='/CreateNewList'>
            <p className="mt-3 text-left text-green-800 font-semibold hover:text-black">
              Create new list
            </p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SavePostDropDown;
