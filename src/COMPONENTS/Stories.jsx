import React from "react";
import { NavLink } from "react-router-dom";
import PostedStories from "./PostedStories";

const Stories = () => {
  return (
    <div className="flex ">
      <div className="shadow-md w-full">
      <div id="head" className="shadow-md w-full">
            <div className="flex justify-between p-5 w-full">
              <p className="md:text-5xl text-2xl font-bold text-left m-3">
                Your stories
              </p>
              <div className="sm:flex-row flex flex-col p-2 sm:space-x-2">
                <NavLink to="/MediumClone/Write" className="sm:h-1/2">
                  <button className="rounded-full p-1 sm:p-2 bg-green-600 text-white text-sm w-28">
                    Write a story
                  </button>
                </NavLink>
                <NavLink className="sm:h-1/2 mt-1 sm:mt-0">
                  <button className="rounded-full p-1 border-black border-2 border-solid text-sm sm:p-1.5 w-28">
                    Import a story
                  </button>
                </NavLink>
              </div>
            </div>
            <nav className="flex p-2 space-x-6 ml-1 w-full">
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/MediumClone/Stories/Drafts"
              >
                Drafts
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/MediumClone/Stories/Published"
              >
                Published
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/MediumClone/Stories/Responses"
              >
                Responses
              </NavLink>
            </nav>
          </div>
      </div>
    </div>
  );
};

export default Stories;
