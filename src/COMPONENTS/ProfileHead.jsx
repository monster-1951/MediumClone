import React from 'react'
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { BsThreeDots } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProfileHead = () => {
  const UserData = useSelector(state => state.ProfileData.value)
  return (
    <div id="head" className="shadow-md w-full">
    <div className="flex justify-between p-5 w-11/12">
      <p className="md:text-5xl text-2xl font-semibold text-left m-3 flex -ml-4">
        {
          UserData.DP ? <img src={UserData.DP} alt="" className='w-16 rounded-[50%]' /> :
        <UserCircleIcon className="w-10" />
        }
        User-786
      </p>
      <div className="mt-5">
        <BsThreeDots />
      </div>
    </div>
    <nav className="flex p-2 space-x-6 ml-1 w-full">
      <NavLink
        className={(e) => {
          return e.isActive ? "underline underline-offset-8" : "";
        }}
        to="/MediumClone/ProfilePage/Home"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return e.isActive ? "underline underline-offset-8" : "";
        }}
        to="/MediumClone/ProfilePage/Lists"
      >
        Lists
      </NavLink>
      <NavLink
        className={(e) => {
          return e.isActive ? "underline underline-offset-8" : "";
        }}
        to="/MediumClone/ProfilePage/About"
      >
        About
      </NavLink>
    </nav>
  </div>
  )
}

export default ProfileHead