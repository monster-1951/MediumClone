import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { postToBeDeleted } from "../CONTEXT/context";
import { DeleteFromLists } from "../REDUX/YourLists/ListsSlice";
import { useDispatch } from "react-redux";
const OptnsList = ({ListNumber}) => {
  const dispatch = useDispatch()
  const [isOpen, setisOpen] = useState(false);
  const listNum = useContext(postToBeDeleted);
  const ListNum = ListNumber;

  useEffect(() => {
   console.log(listNum);
  })
  
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          toggleOpen();
          listNum.setDelThisPost(ListNum);
          console.log(listNum);
        }}
        className="flex justify-end"
      >
        <BsThreeDots />
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm overflow-hidden bg-white w-40 z-10 font-semibold">
          <ul className="p-3 space-y-3 flex flex-col z-10 bg-white ">
            <NavLink className="flex space-x-4 hover:text-lg" to="">
              <button>Copy link</button>
            </NavLink>
            <NavLink className="flex space-x-4 hover:text-lg">
              Edit list info
            </NavLink>
            <NavLink
              className="flex space-x-4 hover:text-lg"
              to=""
            >
              <button>Make list public</button>
            </NavLink>
            <NavLink className="flex space-x-4 hover:text-lg">
              <button>Recorder items</button>
            </NavLink>
            <NavLink className="flex space-x-4 hover:text-l">
              <button>Hide responses</button>
            </NavLink>
            {
            (listNum.DelThisPost!='ReadingList')&&
            <NavLink to="/MediumClone/Library/YourLists/DeleteList" className="flex space-x-4 text-red-700 hover:text-lg">
              <button>Delete list</button>
            </NavLink>
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptnsList;
