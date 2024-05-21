import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'; 
const Post = () => {
  const UserDetails = useSelector((state) => state.ProfileData.value);
  const posts = UserDetails.Posts;
  const { id } = useParams();
  const [CurrentPost] = posts.filter((element) => {
    return element.id == id;
  });
  useEffect(() => {
    console.log(CurrentPost);
  });
  return (
    <center>
      <center id="main" className="w-8/12 border-2 border-black">
        <ReactQuill 
            theme="bubble"
            id="Title"
            value={CurrentPost?.Title}
            readOnly
            />
        <div className="font-normal" id="postedBy">
          <div id="dp">{<img src={UserDetails.DP} alt="" className=""/> || <FaUserCircle />}</div>
          <p id="Uname">{
            UserDetails.UserName || "User-786"
          }</p>
            <p id="timeToRead">{
              ((CurrentPost.Title.length + CurrentPost.Body.length)/250).toPrecision(2) + " min read"
            }</p>
          <p id="PostedDate">{CurrentPost.PublishedOn}</p>
        </div>
        <ReactQuill 
            theme="bubble"
            id="PostBody"
            value={CurrentPost.Body}
            readOnly
            />
      </center>
    </center>
  );
};

export default Post;
