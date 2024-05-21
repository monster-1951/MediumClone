import React from 'react'
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

const ProfileData = () => {
  const UserData = useSelector(state => state.ProfileData.value)
  return (
    <div id="ProfileData"
    className="sticky h-fit top-0 p-3 lg:block hidden lg:w-1/4 shadow-sm"
  >
    <div className="space-y-3">
      {
        UserData.DP ? <img src={UserData.DP} alt="" className='w-20 rounded-[50%]'/> : 
      <FaUserCircle />
      }
      <p id="userName" className="text-left font-bold text-xl">
        user-786
      </p>
      <p id="userBio" className="text-left font-medium text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        officiis, dolores veritatis unde officia eveniet neque sint vel
        obcaecati? Autem delectus sunt harum eum aliquid quia ducimus
        minima? Voluptatem debitis, cum quidem numquam et obcaecati ab sed
        accusamus cumque culpa maiores reprehenderit perferendis magni
        voluptates eligendi amet ullam assumenda aliquid?
      </p>
      <div className="flex">
        <NavLink to="/MediumClone/ProfilePage/EditProfile">
        <button className="text-green-600 font-medium text-sm">
          Edit profile
        </button>
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default ProfileData