import React from "react";
import { NavLink } from "react-router-dom";

const Stories = () => {
  return (
    <div className="flex justify-between">
      <div className="shadow-md lg:w-3/4 sm:w-full">
        <div id="head" className="shadow-sm">
          <div className="flex justify-between p-5">
            <p className="text-5xl font-semibold">Your stories</p>
            <div className="flex space-x-3 p-2">
              <NavLink to="/Write" className="h-1/2">
                <button className="rounded-full p-2 bg-green-600 text-white">
                  Write a story
                </button>
              </NavLink>
              <NavLink className="h-1/2">
                <button className="rounded-full border-black border-2 border-solid p-1.5">
                  Import a story
                </button>
              </NavLink>
            </div>
          </div>
          <nav className="flex p-2 space-x-6 ml-1">
            <NavLink
              className={(e) => {
                return e.isActive ? "underline underline-offset-8" : "";
              }}
              to="/Stories/Drafts"
            >
              Drafts
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "underline underline-offset-8" : "";
              }}
              to="/"
            >
              Published
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "underline underline-offset-8" : "";
              }}
              to="/"
            >
              Responses
            </NavLink>
          </nav>
        </div>
       <div className="shadow-sm">
        Drafts
       </div>
      </div>
    </div>
  );
};

export default Stories;
