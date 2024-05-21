import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import ShareDropDown from "./ShareDropDown";
import MoreDropDown from "./MoreDropDown";
import StaffPicks from "./StaffPicks";
import { postToBeDeleted } from "../CONTEXT/context";
import "react-quill/dist/quill.bubble.css";
import PostsList from "./PostsList";

const PostedStories = () => {
  const postId = useContext(postToBeDeleted ? postToBeDeleted : "");
  const MyPosts = useSelector((state) => state.Posts.value);
  const PreviewtitleRef = useRef();
  useEffect(() => {
    console.log(MyPosts);
    console.log(postId);
  });

  return (
    <div className="lg:flex w-full">
      <div className="flex justify-between space-x-2 lg:w-10/12">
        <div className="shadow-md w-[100%]">
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
                Published {MyPosts.length}
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/MediumClone/"
              >
                Responses
              </NavLink>
            </nav>
          </div>
          <div className={`shadow-sm pb-5 text-wrap`}>
          <PostsList/>
          </div>
        </div>
      </div>
      <div className="sm:w-4/12">
        <StaffPicks className="hidden sm:block" />
      </div>
    </div>
  );
};

export default PostedStories;
