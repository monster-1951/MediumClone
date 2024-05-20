import React, { useEffect, useRef, useState } from "react";
import ProfileHead from "./ProfileHead";
import ProfileData from "./ProfileData";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AddAbout } from "../REDUX/ProfileData/ProfileSlice";
const About = () => {
  const dispatch = useDispatch();
  const [clicked, setclicked] = useState(false);
  const ProfData = useSelector((state) => state.ProfileData.value);
  const [about, setabout] = useState(ProfData?.About ? ProfData.About : "");
  const abtRef = useRef();
  useEffect(() => {
    console.log(ProfData.About);
  });
  return (
    <div className="flex">
      <div id="Main" className=" w-full lg:w-9/12 v">
        <ProfileHead />
        {!clicked ? (
          <div>
            {(ProfData.About == null)||(ProfData.About.length==0) ? (
              !clicked && (
                <div  className="flex justify-center p-5 w-11/12">
                    <div className="bg-gray-50 h-96 w-screen rounded-xl flex flex-col  justify-center space-y-6 p-5">
                  <p>Tell the world about yourself</p>
                  <p>
                    Here’s where you can share more about yourself: your
                    history, work experience, accomplishments, interests,
                    dreams, and more. You can even add images and use rich text
                    to personalize your bio.
                  </p>
                  <NavLink>
                    <button
                      className="border-[1px] border-black rounded-3xl sm:rounded-full sm:w-[30%] p-2"
                      onClick={() => {
                        setclicked(!clicked);
                      }}
                    >
                      Get started
                    </button>
                  </NavLink>
                </div>
                </div>
              )
            ) : (
              <div id="input" className="flex flex-col p-5 space-y-5">
                <div className="flex w-full border-l-2 border-black p-3 ">
                  <input
                    type="text"
                    className="outline-none text-left py-2 w-11/12"
                    placeholder="Enter about you"
                    value={about}
                    onChange={(e) => {
                      setabout(e.target.value);
                      console.log(about);
                      dispatch(AddAbout(abtRef.current.value));
                    }}
                    ref={abtRef}
                  />
                </div>
                {<div className="flex justify-end space-x-3 w-11/12">
                  <button className="p-2 rounded-3xl  font-semibold border-[1px] border-black w-16">
                    Cancel
                  </button>
                  <button className="p-2 rounded-3xl font-semibold  bg-black text-white w-16">
                    Save
                  </button>
                </div>}
              </div>
            )}
          </div>
        ) : (
          <div id="input" className="flex flex-col p-5 space-y-5">
            <div className="flex border-l-2 border-black p-3">
              <input
                type="text"
                className="outline-none text-left py-2 w-11/12"
                placeholder="Enter about you"
                value={about}
                onChange={(e) => {
                  setabout(e.target.value);
                  console.log(about);
                  dispatch(AddAbout(abtRef.current.value));
                }}
                ref={abtRef}
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button className="p-2 rounded-3xl  font-semibold border-[1px] border-black w-16">
                Cancel
              </button>
              <button className="p-2 rounded-3xl font-semibold  bg-black text-white w-16">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
      <ProfileData />
    </div>
  );
};

export default About;
