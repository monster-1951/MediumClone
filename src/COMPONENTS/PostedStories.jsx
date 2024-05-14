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
      <div className="flex justify-between space-x-2">
        <div className="shadow-md sm:w-full">
          <div id="head" className="shadow-md w-full">
            <div className="flex justify-between p-5">
              <p className="md:text-5xl text-2xl font-bold text-left m-3">
                Your stories
              </p>
              <div className="flex space-x-3 p-2">
                <NavLink to="/Write" className="h-1/2">
                  <button className="rounded-full p-2 bg-green-600 text-white">
                    Write a story
                  </button>
                </NavLink>
                <NavLink className="h-1/2">
                  <button className="rounded-full border-black border-2 border-solid p-1.5">
                    Import a story
                  </button>
                </NavLink>
              </div>
            </div>
            <nav className="flex p-2 space-x-6 ml-1">
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/Stories/Drafts"
              >
                Drafts
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/Stories/Published"
              >
                Published {MyPosts.length}
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "underline underline-offset-8" : "";
                }}
                to="/"
              >
                Responses
              </NavLink>
            </nav>
          </div>
          <div className={`shadow-sm pb-5`}>
            <div className={`grid grid-cols space-y-10 mt-5`}>
              {MyPosts.map((e, i) => {
                return (
                  <div
                    key={e.id}
                    className="w-full text-left p-3 space-y-3 font-light h-48"
                  >
                    <div className="flex space-x-3">
                      <div>
                        <div className="text-xl font-extrabold">
                          {e.PreviewTitle}
                        </div>
                        <h3 className="">{e.PreviewSubtitle}</h3>
                        {e.PreviewSubtitle !== e.Body && (
                          <p className="">{e.Body}</p>
                        )}
                      </div>
                      <img
                        src={e.PreviewImage}
                        alt=""
                        className="rounded-lg w-40 h-32"
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
      <StaffPicks className="" />
    </div>
  );
};

export default PostedStories;
