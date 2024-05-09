import React, { useState,useRef,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import DropDown from "./DropDown";

const WriteArticle = () => {
  const [heading, setheading] = useState('')
  const [data, setdata] = useState('')
  const [Draft, setDraft] = useState([])
  const [someText, setsomeText] = useState(false)
  const savingRef = useRef();
  const dataRef = useRef();
  const headRef = useRef();
  
  
  
  
 
  
  
  
  useEffect(() => { 
    console.log(Draft);
  })
    return (
    <>
      <nav className="flex justify-between">
        <NavLink to="/" className="flex">
          <img src="MediumLogo.png" alt="" />
          <span className="p-5" ref={savingRef}>Draft in User786</span>
        </NavLink>
        <div className="flex p-5 justify-around space-x-4">
          <NavLink to="/">
            <button className={someText?"bg-green-400 text-white rounded-full p-2 text-xs font-bold ":"bg-green-400 text-white rounded-full p-2 text-xs font-bold cursor-not-allowed opacity-75"} disabled={data.length<1 && heading.length<1}>
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
            <FaUserCircle className="" />
          </NavLink>
        </div>
      </nav>

      <input
      ref={headRef}
        type="text"
        placeholder="Title"
        className="w-full h-20 text-5xl p-5 text-pretty"
        value={heading}
        onChange={async (e) => {
          setheading(e.target.value)
          setDraft([{Heading:heading,Data:data,id:uuidv4()}])
          savingRef.current.innerText = "Saving..."
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
      <textarea
      ref={dataRef}
        placeholder="Tell your story..."
        className="w-full h-56 p-5 text-justify text-pretty"
        value={data}
        onChange={(e) => {
            setdata(e.target.value)
            setDraft([{Heading:heading,Data:data,id:uuidv4()}])
            savingRef.current.innerText = "Saving..."
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
    </>
  );
};

export default WriteArticle;
