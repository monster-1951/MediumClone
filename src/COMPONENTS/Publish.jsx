import React, { useContext, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import TagsInput from "react-tagsinput";
import { NavLink } from "react-router-dom";
import { data2 } from "../CONTEXT/context";
import { useDispatch } from "react-redux";
import { InsertToPosts } from "../REDUX/Drafts/DraftSlice";
import { nanoid } from "@reduxjs/toolkit";
const Publish = () => {
  const currentDate = new Date()
  const dispatch = useDispatch();
  const Postt = useContext(data2);
  const [Title, setTitle] = useState(Postt.post.Heading);
  const [Body, setBody] = useState(Postt.post.Data);
  const [PreviewTitle, setPreviewTitle] = useState(Title);
  const [PreviewSubtitle, setPreviewSubtitle] = useState(Body);
  const [file, setfile] = useState("");
  const [tags, settags] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setfile(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    console.log(Postt.post);
  });

  return (
    <div className="flex flex-col sm:flex-col lg:flex-row mt-6">
      <div className="flex flex-col p-3 sm:w-full lg:w-1/2">
        <p className="text-left p-2 flex justify-between">
          <b className="font-bold">Story Preview</b>
          <NavLink to="/Write">
            <button className="bg-black text-white p-2 rounded-lg">
              Close
            </button>
          </NavLink>
        </p>
        <div className="md:w-full p-2">
          {file ? (
            <img src={file} alt="" className=" w-full" />
          ) : (
            <div className="h-full w-full shadow-inner bg-gray-100">
              <p className="p-10">
                Include a high-quality image in your story to make it more
                inviting to readers.
              </p>
            </div>
          )}
        </div>
        <div className="bg-white">
          <div className="p-3">
            <input
              type="file"
              name="previewImage"
              id=""
              onChange={handleChange}
              className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
            />
          </div>
        </div>
        <div className="p-3 space-y-2">
          <input
            value={PreviewTitle}
            onChange={(e) => {
              setPreviewTitle(e.target.value);
            }}
            type="text"
            placeholder="Write a preview title"
            className=" w-full outline-none placeholder:font-bold p-2"
          />
          <hr />
          <input
            value={PreviewSubtitle}
            onChange={(e) => {
              setPreviewSubtitle(e.target.value);
            }}
            type="text"
            placeholder="Write a preview subtitle"
            className=" w-full outline-none p-2"
          />
          <hr />
          <p className="text-left font-light">
            <b>Note: </b> Changes here will affect how your story appears in
            public places like Medium’s homepage and in subscribers’ inboxes —
            not the contents of the story itself.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-3 space-y-3">
        <p className="text-left p-3">
          Publishing to: <b>User-786</b>
        </p>
        <p className="text-left p-3">
          Add or change topics (up to 5) so readers know what your story is
          about
        </p>
        <TagsInput
          value={tags}
          onChange={settags}
          className="text-left bg-gray-100 p-2"
        />
        <p>
          <NavLink to="/LearnMore">
            <span className="underline">Learn more </span>
          </NavLink>
          about what happens to your post when you publish.
        </p>
        <div className="flex p-3 space-x-[10%]">
          <NavLink to="/Stories/Published">
            <button
              className="bg-green-700 text-white rounded-full p-2 text-xs font-bold w-[150%]"
              onClick={() => {
                dispatch(InsertToPosts({
                  Title:Postt.post.Heading,
                  Body:Postt.post.Data,
                  PreviewTitle:PreviewTitle,
                  PreviewSubtitle:PreviewSubtitle,
                  PreviewImage:file,
                  id:nanoid(),
                  PublishedOn: `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,
                  Tags:tags
                }))
              }}
            >
              Publish now
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="bg-white text-gray-400 rounded-full p-2 text-xs font-bold w-[150%] ">
              Schedule for later
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Publish;