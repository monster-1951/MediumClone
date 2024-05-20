import React, { useContext, useEffect, useRef, useState } from "react";
import { indexOfList } from "../CONTEXT/context";
import { useSelector } from "react-redux";
import { FaLock, FaUnlock, FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser, FaRegComment } from "react-icons/fa6";
import { PiHandsClappingThin } from "react-icons/pi";
import OptnsList from "./OptnsList";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import SavePostDropDown from "./SavePostDropDown";
import MoreDropDown from "./MoreDropDown";

const CurrentList = () => {
    const profileData = useRef()
  const Lists = useSelector((state) => state.Lists.value);
  const indOfList = useContext(indexOfList);
  const CurrentLis = Lists[indOfList.index];
  const [Description, setDescription] = useState(CurrentLis.Ldesc);
  useEffect(() => {
    console.log(CurrentLis);
    let height = profileData.current.clientHeight
    console.log(height);
  });
  return (
    <>
      <div id="Main" className="lg:flex lg:justify-between p-5">
        <div id="listData" className="lg:w-3/5 overflow-y-auto shadow-sm">
          <div id="userDetails" className="flex sm:w-full p-3 space-x-2">
            <div id="dp">
              <UserCircleIcon className="h-full  w-10 sm:w-14" />
            </div>
            <div id="UnameListDate" className="w-full">
              <div id="username" className="font-semibold text-lg flex">
                User-786
              </div>
              <div id="listData" className="flex text-sm space-x-3">
                <p id="Date" className="sm:w-[15%] flex">
                  {CurrentLis.CreatedOn}
                </p>
                <div className="flex space-x-3 w-1/2">
                  <p>
                    {CurrentLis.Posts.length == 1
                      ? " " + CurrentLis.Posts.length + " story"
                      : " " + CurrentLis.Posts.length + " stories"}
                  </p>
                  <span className="mt-1">
                    {CurrentLis.Privacy ? <FaLock /> : <FaUnlock />}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="PostsInThisList">
            <div id="listNamenDesc" className="p-4">
              <div
                id="ListName"
                className="flex font-bold text-3xl text-black h-16"
              >
                {CurrentLis.Lname}
              </div>

              <div
                id="Menu"
                className="flex justify-end h-10 border-t-2 border-b-2 border-solid p-3"
              >
                <OptnsList />
              </div>

              <div
                id="Desc"
                className="px-3 flex justify-between mt-8 border-l-[3px] border-black space-x-6"
              >
                {/* If we set the input value it should be saved in the list data */}
                <input
                  type="text"
                  name=""
                  id=""
                  value={Description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Write a brief description"
                  className="bg-gray-200 p-2 w-10/12 sm:w-9/12 rounded-md"
                />
                <div className="flex flex-wrap sm:justify-evenly sm:w-3/12 justify-center">
                  <button className="font-semibold text-sm">Cancel</button>
                  <button className="font-semibold text-sm text-green-600">
                    Done
                  </button>
                </div>
              </div>
            </div>
            {CurrentLis.Posts.map((e, i) => {
              return (
                <div key={e.id} id="Post">
                  <div id="AuthorData" className="flex p-3 w-full space-x-4">
                    <span id="DpOfAuthor">
                      <FaRegCircleUser className="h-7" />
                    </span>
                    <p id="PostedBY">user-786</p>
                  </div>
                  <div id="PostData" className="flex justify-between p-3">
                    <div>
                      <p className="font-bold sm:font-extrabold sm:text-2xl text-left">
                        {e.PreviewTitle}
                      </p>
                      <p className="text-left font-normal sm:font-medium text-gray-500">
                        {e.PreviewSubtitle}
                      </p>
                    </div>
                    <div id="PostImage" className="w-40">

                      <img src={"/MediumClone"+e.PreviewImage} alt="" />

                    </div>
                  </div>
                  <div id="PostResponses" className="flex p-3">
                    <div className="flex space-x-6">
                      <PiHandsClappingThin />
                      <FaRegComment />
                    </div>
                    <div><SavePostDropDown /></div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div ref={profileData} id="ProfileData" className="sticky h-fit top-0 p-3 md:block hidden lg:w-1/4 shadow-sm">
          <div className="space-y-3">
            <FaUserCircle />
            <p id="userName" className="text-left font-bold text-xl">user-786</p>
            <p id="userBio" className="text-left font-medium text-gray-500">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officiis, dolores veritatis unde officia eveniet neque sint vel obcaecati? Autem delectus sunt harum eum aliquid quia ducimus minima? Voluptatem debitis, cum quidem numquam et obcaecati ab sed accusamus cumque culpa maiores reprehenderit perferendis magni voluptates eligendi amet ullam assumenda aliquid?
            </p>
            <div className="flex">
            <button className="text-green-600 font-medium text-sm">Edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentList;