import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { postToBeDeleted,data2 } from "../CONTEXT/context";
import { useDispatch } from 'react-redux';
import { FetchThePost } from '../REDUX/Drafts/DraftSlice';
function MoreDropDown({postNumber}) {
    const dispatch = useDispatch()
    const EditPost = useContext(data2);
    const DeleteThisPost = useContext(postToBeDeleted);
    const postNum = postNumber;
    const [isOpen, setisOpen] = useState(false);
    const toggleOpen = () => {
      setisOpen(!isOpen);
    };
    
  return (
    <div className="flex flex-col">
      <button onClick={() => {
        toggleOpen();
        DeleteThisPost.setDelThisPost(postNum)
        console.log(DeleteThisPost);
      }
      
      } className='mr-36'>
      <BsThreeDots />
      </button>
      {isOpen && (
        <div className="shadow-2xl rounded-sm overflow-hidden bg-white w-40 z-10">
          <ul className="p-3 space-y-3 flex flex-col z-10 bg-white ">
            <NavLink  className="flex space-x-4 hover:text-xl" to="/Write"><button onClick={() => {
             EditPost.setPost(DeleteThisPost.DelThisPost)
            }
            }>Edit story</button></NavLink>
            <NavLink  className="flex space-x-4 hover:text-xl">View stats</NavLink>
            <NavLink className="flex space-x-4 hover:text-xl text-red-600" to="/Stories/Published/DeletePost"><button>
              Delete story</button></NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MoreDropDown;
