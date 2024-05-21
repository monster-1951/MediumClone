import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShareDropDown from "./ShareDropDown";
import MoreDropDown from "./MoreDropDown";
import StaffPicks from "./StaffPicks";
import { postToBeDeleted } from "../CONTEXT/context";

const PostedStories = () => {
  const postId = useContext(postToBeDeleted ? postToBeDeleted : "");
  const MyPosts = useSelector((state) => state.Posts.value);
  useEffect(() => {
    console.log(MyPosts);
    console.log(postId);
  });

  return (
    <div className="lg:flex w-full">
      <div className="flex justify-between space-x-2 sm:w-11/12">
        <div className="shadow-md sm:w-full">
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
            <div className={`grid grid-cols space-y-10 mt-5`}>
              {MyPosts.map((e, i) => {
                return (
                  <div
                    key={e.id}
                    className="w-80 sm:w-full text-left p-3 space-y-3 font-light h-80 sm:h-40"
                  >
                    <div className="flex space-x-3">
                      <div className="w-11/12">
                        <div className="sm:text-xl font-extrabold">
                          {e.PreviewTitle}
                        </div>
                        <h3 className="text-sm">{e.PreviewSubtitle}</h3>
                        {e.PreviewSubtitle !== e.Body && (
                          <p className="">
                            {e.Body.length > 95
                              ? e.Body.slice(0, 95) + "..."
                              : e.Body}
                          </p>
                        )}
                      </div>
                      <img
                        src={"/MediumClone" + e.PreviewImage}
                        alt=""
                        className="bg-slate-800 h-40 w-52 rounded-xl sm:w-40 "
                      />
                    </div>

                    <div className="flex">
                      <span>Published on {e.PublishedOn}</span>
                      <div className="flex space-x-3 justify-between">
                        {" "}
                        <ShareDropDown postNumber={e.id} />
                        <MoreDropDown postNumber={e.id} />
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <StaffPicks className="hidden sm:block" />
    </div>
  );
};

export default PostedStories;
