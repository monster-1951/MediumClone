import React, { useContext, useEffect, useRef, useState } from "react";
import { indexOfList } from "../CONTEXT/context";
import { useSelector } from "react-redux";
import { FaLock, FaUnlock, FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser, FaRegComment } from "react-icons/fa6";
import { PiHandsClappingThin } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import SavePostDropDown from "./SavePostDropDown";
import { Link } from "react-router-dom";
import ProfileData from "./ProfileData";

const CurrentList = () => {
  const UserData = useSelector((state) => state.ProfileData.value);
  const profileData = useRef();
  const Lists = useSelector((state) => state.Lists.value);
  const indOfList = useContext(indexOfList);
  const CurrentLis = Lists[indOfList.index];
  const [Description, setDescription] = useState(CurrentLis.Ldesc);
  useEffect(() => {
    console.log(CurrentLis);
    // let height = profileData.current.clientHeight
    // console.log(height);
  });
  return (
    <>
      <div id="Main" className="lg:flex lg:justify-between p-5">
        <div id="listData" className="lg:w-4/5 overflow-y-auto shadow-sm">
          <div id="userDetails" className="flex sm:w-full p-3 space-x-2">
            <div id="dp">
              {(
                <img
                  src={UserData.DP}
                  alt=""
                  className="w-10 h-10 rounded-[50%]"
                />
              ) || <UserCircleIcon className="h-full  w-10 sm:w-14" />}
            </div>
            <div id="UnameListDate" className="w-full">
              <div id="username" className="font-semibold text-lg flex">
                {UserData.UserName || "User-786"}
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
            <div id="listNamenDesc" className="p-4 space-y-6 sm:space-y-0">
              <div
                id="ListName"
                className="flex justify-between font-bold text-3xl text-black h-16"
              >
                <p>{CurrentLis.Lname}</p>
                <span className="mr-4">
                  <BsThreeDots />
                </span>
              </div>

              <div
                id="Desc"
                className="px-3 flex justify-between border-l-[3px] border-black space-x-6"
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
                    <p id="PostedBY">{`User-${(
                      Math.random() * 1000
                    ).toPrecision(3)}`}</p>
                  </div>
                  <div id="PostData" className="flex justify-between p-3">
                    <div>
                      <Link to={`/MediumClone/Stories/Post`}>
                      <p className="font-bold sm:font-extrabold sm:text-2xl text-left">
                        {e.PreviewTitle}
                      </p></Link>
                      <p className="text-left font-normal sm:font-medium text-gray-500">
                        {e.PreviewSubtitle}
                      </p>
                    </div>
                    <div id="PostImage" className="w-40">
                   
                    {
                         !  (e.PreviewImage== undefined)?
                         <img
                          src={"/MediumClone" + e.PreviewImage}
                          alt="Image not available"
                          className="w-fit h-fit"
                        />:(
                          <div className="bg-slate-900 rounded-lg text-white sm:w-44 border-2 border-black sm:h-28 flex flex-col justify-center font-semibold p-3">
                            Image not available
                          </div>
                        )
                        }
                    </div>
                  </div>
                  <div id="PostResponses" className="flex p-3">
                    <div className="flex space-x-6">
                      <PiHandsClappingThin />
                      <FaRegComment />
                    </div>
                    <div>
                      <SavePostDropDown />
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>

        <ProfileData />
      </div>
    </>
  );
};

export default CurrentList;
