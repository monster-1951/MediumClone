import React, { useEffect, useState } from "react";
import { IoBookmarkOutline, IoBookmarkSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AddPostToList, DelPostFromList } from "../REDUX/YourLists/ListsSlice";
const SavePostDropDown = ({ postNum }) => {
  const dispatch = useDispatch();
  const IdOfThisPost = postNum;
  const lists = useSelector((state) => state.Lists.value);
  const posts = useSelector((state) => state.Posts.value);
  const feed = useSelector((state) => state.Feed.value);
  const allPosts = [...posts, ...feed];
  const Reading_list = lists[0];
  const Oth_lists = lists.slice(1);
  const [saved, setsaved] = useState("");
  const [isOpen, setisOpen] = useState(false);
  let toList = [];
  let toList2 = lists.map((e) => {
    return e.Id;
  });
  const ThisPost = allPosts.filter((e) => {
    return e.id == IdOfThisPost;
  });
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };
  const addId = (id, toList) => {
    !toList?.length ? toList.push(id) : !toList.includes(id) && toList.push(id);
    console.log(toList);
    dispatch(AddPostToList({ post: ThisPost, list: toList }));
  };

  const delId = (id) => {
    toList2 = toList2.filter((i) => {
      return i == id;
    });

    dispatch(DelPostFromList({ post: ThisPost, list: toList2 }));
    console.log(toList2);
  };

  const handleCheckbox = (e) => {
    let Id = e.target.id;
    e.target.checked && addId(e.target.id, toList);
    !e.target.checked && delId(e.target.id);
  };

  return (
    <div className="flex flex-col justify-end">
      <button
        onClick={() => {
          setsaved(!saved);
          toggleOpen();
          console.log(ThisPost);
        }}
        className="flex justify-end w-72"
      >
        {!saved ? <IoBookmarkOutline /> : <IoBookmarkSharp />}
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm bg-white sticky w-72 p-3">
          <div
            key={"svGVVHXlj-5uYubk4mIE_"}
            className="flex justify-between p-3"
          >
            <div className="flex space-x-3">
              <input
                type="checkbox"
                name=""
                id="svGVVHXlj-5uYubk4mIE_"
                onChange={handleCheckbox}
              />
              <p className="font-semibold">Reading list</p>
            </div>
            <div>
              <FaLock />
            </div>
          </div>
          <hr />
          {Oth_lists.map((e, i) => {
            return (
              <div key={e.Id} className="flex justify-between p-3">
                <div className="flex space-x-3">
                  <input
                    type="checkbox"
                    name=""
                    id={e.Id}
                    onChange={handleCheckbox}
                  />
                  <p className="font-semibold">{e.Lname}</p>
                </div>
                <div>{e.Privacy ? <FaLock /> : <FaUnlock />}</div>
              </div>
            );
          })}
          <NavLink to="/CreateNewList">
            <p className="mt-3 text-left text-green-800 font-semibold hover:text-black">
              Create new list
            </p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SavePostDropDown;
