import React,{useContext} from 'react'
import { NavLink } from "react-router-dom";
import {  FaLock, FaUnlock,FaUserCircle } from "react-icons/fa";
import OptnsList from "./OptnsList";
import { useSelector } from 'react-redux';
import { indexOfList } from "../CONTEXT/context";
import ProfileHead from './ProfileHead';
import ProfileData from './ProfileData';
const Lists = () => {
    const ListInd = useContext(indexOfList);
    const Lists = useSelector((state) => state.Lists.value);
  return (

    <div className="flex">
      <div id="Main" className="lg:w-9/12 w-full v">
       <ProfileHead/>
        <div id='Lists' className="space-y-10 mt-2">
          {/* <div className=" shadow-xl bg-green-700 h-28"></div> */}
          {Lists.map((e, i) => {
            return (
              <div
                key={e.Id}
                className="flex justify-between bg-gray-100 rounded-xl h-fit"
              >
                <div className="w-3/5 p-3 flex flex-col space-y-[7%]">
                  <div className="flex space-x-2">
                    <FaUserCircle className="h-7" />
                    <p className="font-semibold">user-786</p>
                  </div>
                  <NavLink
                    id={e}
                    onClick={() => {
                      ListInd.setIndex(i);
                      console.log(ListInd.index);
                    }}
                    to="/MediumClone/Library/YourLists/CurrentList"
                  >
                    <div className="flex font-extrabold text-xl">{e.Lname}</div>
                  </NavLink>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <p>{e.Posts.length + " stories"}</p>
                      <span>
                        {e.Privacy ? (
                          <FaLock className="h-6" />
                        ) : (
                          <FaUnlock className="h-6" />
                        )}
                      </span>
                    </div>
                    <OptnsList className="w-40" ListNumber={e.Id} />
                  </div>
                </div>
                <div className="bg-slate-800 h-40 w-52 rounded-xl grid grid-cols-3 overflow-hidden">
                  {e.Posts.length?e.Posts.map((i, index) => {
                    return !(<img src={i.PreviewImage} alt="" />) ||
                      !e.Posts.length ? (
                      <img
                        src="../Images/altImage1.jpeg"
                        alt=""
                        className="border-2 border-black grid-cols-3"
                      />
                    ) : (
                      <img
                        src={"/MediumClone"+i.PreviewImage}
                        alt=""
                        className="w-full border-2 border-black"
                      />
                    );
                  }):( <img
                    src={i.PreviewImage}
                    alt=""
                    className="w-full border-2 border-black"
                  />)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ProfileData/>
    </div>
  )
}

export default Lists