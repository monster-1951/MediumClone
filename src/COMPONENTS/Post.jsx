import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import parse from "html-react-parser";
import "react-quill/dist/quill.bubble.css";
const Post = () => {
  const UserDetails = useSelector((state) => state.ProfileData.value);
  const posts = UserDetails.Posts;
  const { id } = useParams();
  const [CurrentPost] = posts.filter((element) => {
    return element.id == id;
  });
  const Title = parse(CurrentPost.Title);
  const Body = parse(CurrentPost.Body);
  useEffect(() => {
    console.log(CurrentPost);
  });
  return (
    <center>
      <center id="main" className="md:w-8/12 p-3 flex flex-col space-y-10">
        <div id="Head" className="text-xl md:text-5xl text-left font-bold text-gray-650">
          {Title}
        </div>
        <div id="postedBy" className="flex font-normal space-x-5">
          <div id="dp" className="h-16 w-16 rounded-[50%]">
            {(
              <img
                src={UserDetails.DP}
                alt=""
                className="h-fit w-fit rounded-[50%]"
              />
            ) || <FaUserCircle />}
          </div>
          <div>
            <p id="Uname" className="text-xl text-left font-semibold">
              {UserDetails.UserName || "User-786"}
            </p>
            <div id="timeNdate" className="flex space-x-2">
              <p id="timeToRead">
                {(
                  (CurrentPost.Title.length + CurrentPost.Body.length) /
                  250
                ).toPrecision(2) + " min read"}
              </p>
              <p id="PostedDate">.  {CurrentPost.PublishedOn}</p>
            </div>
          </div>
        </div>
        <div id="Body" className="font-serif text-left text-lg text-gray-600">
          {Body}
        </div>
      </center>
    </center>
  );
};

export default Post;
