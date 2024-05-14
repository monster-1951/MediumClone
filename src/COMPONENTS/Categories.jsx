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
      <div className="flex space-x-1 sticky top-20 bg-white p-3 shadow-md z-0">
      <button onClick={scrollCategoriesLeft}>
          <MdOutlineKeyboardArrowLeft className="mt-1.5" />
        </button>
        <div className="overflow-hidden whitespace-nowrap space-x-6 w-1/2 scroll-smooth" ref={categoryRef}> 
          <NavLink to="/Recommendation" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>+</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-4":""
          }
          }>For you</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>Following</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>Productivity</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>RelationShips</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>Politics</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>Mindfullness</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>Social Media</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>LeaderShip</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>Marketing</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>History</NavLink>
          <NavLink to="/" className={(e) => {
            return e.isActive?"underline underline-offset-8":""
          }
          }>WebDevelopment</NavLink>
        </div>
        <button onClick={scrollCategories}>
          <IoIosArrowForward className="mt-1.5" />
        </button>
      </div>
    </>
  );
};

export default Categories;
