import React from "react";
import { useSelector } from "react-redux";
import ShareDropDown from "./ShareDropDown";
import MoreDropDown from "./MoreDropDown";
import ProfileHead from "./ProfileHead";
import ProfileData from "./ProfileData";


const Profile = () => {
    const MyPosts = useSelector((state) => state.Posts.value);
  return (
    <div className="flex">
      <div id="Main" className="lg:w-11/12 w-full">
      <ProfileHead/>
        <div id="Posts" className={`shadow-sm pb-5 text-wrap`}>
        <div className={`grid grid-cols space-y-10 mt-5`}>
          {MyPosts.map((e, i) => {
            return (
              <div
                key={e.id}
                className="w-80 sm:w-full text-left p-3 space-y-3 font-light h-80 sm:h-40"
              >
                <div className="flex space-x-3">
                  <div className="w-11/12 ">
                    <div className="sm:text-2xl font-extrabold">
                      {e.PreviewTitle}
                    </div>
                    <h3 className="text-sm sm:text-xl">{e.PreviewSubtitle}</h3>
                    {e.PreviewSubtitle !== e.Body && (
                      <p className="">
                        {e.Body.length > 95
                          ? e.Body.slice(0, 95) + "..."
                          : e.Body}
                      </p>
                    )}
                  </div>
                  <img
                    src={e.PreviewImage}
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
      <ProfileData/>
    </div>
  );
};

export default Profile;