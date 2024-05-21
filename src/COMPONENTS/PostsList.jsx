import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import ShareDropDown from './ShareDropDown';
import MoreDropDown from './MoreDropDown';
const PostsList = () => {
    const MyPosts = useSelector((state) => state.Posts.value);
  return (
    <div className={`grid grid-cols space-y-10 mt-5`}>
    {MyPosts.map((e, i) => {
      return (
        <div
          key={e.id}
          className="w-80 sm:w-full text-left p-3 space-y-3 font-light h-fit"
        >
          <div className="grid grid-flow-col space-x-3">
            <div className="w-11/12">
              <Link to={`/MediumClone/Stories/Post/${e.id}`}>
                <ReactQuill
                  theme="bubble"
                  defaultValue={e.PreviewTitle}
                  readOnly
                  className="sm:text-xl font-extrabold"
                />
              </Link>
              <ReactQuill
                theme="bubble"
                defaultValue={
                  e.PreviewSubtitle.length > 200
                    ? e.PreviewSubtitle.slice(0, 200) + "..."
                    : e.PreviewSubtitle
                }
                readOnly
                className="text-sm"
              />
              {e.PreviewSubtitle !== e.Body && (
                <div className="col-span-2 text-nowrap">
                  <ReactQuill
                    theme="bubble"
                    defaultValue={
                      e.Body.length > 95
                        ? e.Body.slice(0, 95) + "..."
                        : e.Body
                    }
                    readOnly
                    className="text-nowrap "
                  />
                </div>
              )}
            </div>
            <img
              src={e.PreviewImage}
              alt=""
              className="bg-slate-800 h-40 w-40 rounded-xl sm:w-40 "
            />
          </div>

          <div className="flex">
            <span className="ml-4">Published on {e.PublishedOn}</span>
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
  )
}

export default PostsList