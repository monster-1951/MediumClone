import React, { useState,useRef,useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { v4 as uuidv4 } from 'uuid';
import DropDown from "./DropDown";
import ProfileDropDown from "./ProfileDropDown";
import { data2 } from "../CONTEXT/context";
import { useDispatch, useSelector } from "react-redux";
import { DeleteThisPost } from "../REDUX/Drafts/DraftSlice";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
const WriteArticle = () => {
  const Posts = useSelector(state => state.Posts.value);
  const dispatch = useDispatch()
  const Post = useContext(data2)
  let EditIt = Posts.filter((i) => {
    return i.id == Post.post
  }
  );
  let id = EditIt[0]?.id;
  const [heading, setheading] = useState(EditIt[0]?.Title?EditIt[0].Title:'')
  const [data, setdata] = useState(EditIt[0]?.Body?EditIt[0].Body:'')
  const [someText, setsomeText] = useState(false)
  const savingRef = useRef();
  const dataRef = useRef();
  const headRef = useRef();

  const getPost = () => {
    console.log(EditIt[0]?.Title);
  }
  useEffect(() => { 
    getPost()
})
    return (
    <>
      <nav className="bg-white z-10 flex justify-between sticky top-0 h-20 shadow-md px-2">
        <NavLink to="/MediumClone/" className="flex">
          <img src="MediumLogo.png" alt="" className="hidden sm:block"/>
          <span className="p-5" ref={savingRef}>Draft in User786</span>
        </NavLink>
        <div className="flex p-5 justify-around space-x-4">
          <NavLink to="/MediumClone/Publish" >
            <button className={someText?"bg-green-600 text-white rounded-full p-2 text-xs font-bold ":"bg-green-400 text-white rounded-full p-2 text-xs font-bold cursor-not-allowed opacity-75"} disabled={data.length<1 && heading.length<1} onClick={() => {
              // if(EditIt[0])
              dispatch(DeleteThisPost(id))
            }
            }>
              Publish
            </button>
          </NavLink>
          <NavLink>
            <DropDown />
          </NavLink>
          <NavLink>
            <CiBellOn />
          </NavLink>
          <NavLink>
            <ProfileDropDown/>
          </NavLink>
        </div>
      </nav>

      <ReactQuill
      theme="bubble"
      ref={headRef}
        type="text"
        placeholder="Title"
        className="placeholder:text-3xl w-full h-30 text-3xl p-5 font-normal text-pretty outline-none"
        value={heading}
        onChange={(e) => {
          setheading(e)
          console.log();
          console.log({Heading:headRef.current.value,Data:dataRef.current.value});
          Post.setPost({Heading:headRef.current?.value?headRef.current.value:"",Data:dataRef.current?.value?dataRef.current.value:""})
         
          setTimeout(() => {
            savingRef.current.innerText = "Saved"
          }, 800);
          setTimeout(() => {
            savingRef.current.innerText = "Draft in User786"
          }, 1600);
          (dataRef.current.value.length>=1 || headRef.current.value.length>=1)?setsomeText(true) : setsomeText(false)
        }
        }
       
      />
      <hr />
      <ReactQuill
      theme="bubble"
      ref={dataRef}
        placeholder="Tell your story..."
        className="w-full font-normal text-gray-700 h-fit p-5 text-justify text-pretty outline-none"
        value={data}
        onChange={(e) => {
          setdata(e)
          console.log({Heading:headRef.current,Data:dataRef.current});
          Post.setPost({Heading:headRef.current?.value?headRef.current.value:"",Data:dataRef.current?.value?dataRef.current.value:""})
         
  
            savingRef.current.innerText = "Saving..."
            setTimeout(() => {
              savingRef.current.innerText = "Saved"
            }, 800);
            setTimeout(() => {
              savingRef.current.innerText = "Draft in User786"
            }, 1600);
            
          }
        }
      />
    </>
  );
};

export default WriteArticle;
