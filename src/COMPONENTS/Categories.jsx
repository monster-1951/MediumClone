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
      <div className="flex space-x-1 sticky top-0">
      <button onClick={scrollCategoriesLeft}>
          <MdOutlineKeyboardArrowLeft className="mt-1.5" />
        </button>
        <div className="overflow-hidden whitespace-nowrap space-x-6 w-1/2 scroll-smooth" ref={categoryRef}> 
          <NavLink to="/">+</NavLink>
          <NavLink to="/">For you</NavLink>
          <NavLink to="/">Following</NavLink>
          <NavLink to="/">Productivity</NavLink>
          <NavLink to="/">RelationShips</NavLink>
          <NavLink to="/">Politics</NavLink>
          <NavLink to="/">Mindfullness</NavLink>
          <NavLink to="/">Social Media</NavLink>
          <NavLink to="/">LeaderShip</NavLink>
          <NavLink to="/">Marketing</NavLink>
          <NavLink to="/">History</NavLink>
          <NavLink to="/">WebDevelopment</NavLink>
        </div>
        <button onClick={scrollCategories}>
          <IoIosArrowForward className="mt-1.5" />
        </button>
      </div>
    </>
  );
};

export default Categories;
