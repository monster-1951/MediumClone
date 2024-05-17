import React from "react";
import { NavLink } from "react-router-dom";

const Library = () => {
  return (
    <div className="shadow-md sm:w-full w-full">
      <div id="head" className="shadow-md w-full">
        <div className="flex justify-between p-5">
          <p className="md:text-5xl text-2xl font-bold text-left m-3">
            Your library
          </p>
          <div className="flex space-x-3 p-2">
            <NavLink to="/MediumClone/CreateNewList" className="h-1/2">
              <button className="rounded-full p-2 bg-green-600 text-white">
                New List
              </button>
            </NavLink>
          </div>
        </div>
        <nav className="flex p-2 space-x-6 ml-1">
          <NavLink
            className={(e) => {
              return e.isActive ? "underline underline-offset-8" : "";
            }}
            to="/MediumClone/Library/YourLists"
          >
            Your lists
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "underline underline-offset-8" : "";
            }}
            to="/MediumClone/Library/SavedLists"
          >
            Saved lists
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "underline underline-offset-8" : "";
            }}
            to="/MediumClone/Library/Highlights"
          >
            Highlights
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "underline underline-offset-8" : "";
            }}
            to="/MediumClone/Library/ReadingHistory"
          >
            Reading history
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Library;
