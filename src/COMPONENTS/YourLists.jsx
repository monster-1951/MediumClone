import React, { useContext, useEffect } from "react";
import Library from "./Library";
import { useSelector } from "react-redux";
import { FaLock, FaUnlock, FaUserCircle } from "react-icons/fa";
import OptnsList from "./OptnsList";
import StaffPicks from "./StaffPicks";
import { NavLink } from "react-router-dom";
import { indexOfList } from "../CONTEXT/context";
// import Body from "/Users/SHIVA SHANKAR/Desktop/Medium Clone/Images";
const YourLists = () => {
  const ListInd = useContext(indexOfList);
  const Lists = useSelector((state) => state.Lists.value);
  useEffect(() => {
    console.log(ListInd);
    console.log(Lists);
  });

  return (
    <div className="flex">
      <div className="sm:w-full overflow-y-auto">
        <Library />
        <div className="space-y-10 mt-2">
          {/* <div className=" shadow-xl bg-green-700 h-28"></div> */}
          {Lists.map((e, i) => {
            return (
              <div
                key={e.Id}
                className="flex justify-between bg-gray-100 rounded-xl h-40"
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
      <StaffPicks className="sticky h-screen top-0" />
    </div>
  );
};

export default YourLists;
