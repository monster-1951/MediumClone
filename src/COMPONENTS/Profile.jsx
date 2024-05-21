import React from "react";
import { useSelector } from "react-redux";
import ShareDropDown from "./ShareDropDown";
import MoreDropDown from "./MoreDropDown";
import ProfileHead from "./ProfileHead";
import ProfileData from "./ProfileData";
import PostsList from "./PostsList";


const Profile = () => {
    const MyPosts = useSelector((state) => state.Posts.value);
  return (
    <div className="flex">
      <div id="Main" className="lg:w-11/12 w-full">
      <ProfileHead/>
        <div id="Posts" className={`shadow-sm pb-5 text-wrap`}>
       <PostsList/>
      </div>
      </div>
      <ProfileData/>
    </div>
  );
};

export default Profile;