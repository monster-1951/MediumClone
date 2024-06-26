import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Categories = () => {
  const categoryRef = useRef();
  let scroll = 0;

  const scrollCategories = () => {
    scroll += 350;
    categoryRef.current.scrollTo(scroll, 0);
    console.log("clickd");
  };
  const scrollCategoriesLeft = () => {
    scroll -= 350;
    categoryRef.current.scrollTo(scroll, 0);
    console.log("clickd");
  };

  return (
    <>
      <div className="flex space-x-1 sticky top-20 bg-white p-3 shadow-md z-0 w-full">
        <button onClick={scrollCategoriesLeft}>
          <MdOutlineKeyboardArrowLeft className="mt-1.5" />
        </button>
        <nav
          className="overflow-hidden whitespace-nowrap space-x-6 scroll-smooth flex"
          ref={categoryRef}
        >
          <ul>
            <NavLink
              to="/MediumClone/Recommendation"
              className={(e) => {
                return e.isActive ? "underline underline-offset-8" : "";
              }}
            >
              +
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              For you
            </NavLink>
          </ul>
          <ul
            className={(e) => {
              return e.isActive ? "underline underline-offset-4" : "";
            }}
          >
            <NavLink
              to="/MediumClone/Following"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              Following
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/Productivity"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              Productivity
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/RelationShips"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              RelationShips
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/Politics"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              Politics
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/Mindfullness"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              Mindfullness
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/SocialMedia"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              Social Media
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/LeaderShip"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              LeaderShip
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/Marketing"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              Marketing
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/History"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              History
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/MediumClone/WebDevelopment"
              className={(e) => {
                return e.isActive ? "underline underline-offset-4" : "";
              }}
            >
              WebDevelopment
            </NavLink>
          </ul>
        </nav>
        <button onClick={scrollCategories} className="z-10">
          <IoIosArrowForward className="mt-1.5" />
        </button>
      </div>
    </>
  );
};

export default Categories;
