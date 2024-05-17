import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postToBeDeleted } from "../CONTEXT/context";
import { DeleteThisPost } from "../REDUX/Drafts/DraftSlice";
import { current, nanoid } from "@reduxjs/toolkit";
import { AddToLists } from "../REDUX/YourLists/ListsSlice";
const CreateNewList = () => {
  const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const date = new Date();
  const id = nanoid();
  const dispatch = useDispatch();
  const [listName, setlistName] = useState("");
  const [listDesc, setlistDesc] = useState("");
  const [Private, setPrivate] = useState(false);
  const NameRef = useRef();
  const DescRef = useRef();
  const PrivacyRef = useRef();
  const [List, setList] = useState({});
  const setNewList = () => {
    setList({
      Lname: NameRef.current.value,
      Ldesc: DescRef.current.value,
      Privacy: PrivacyRef.current.checked,
      Posts: [],
      Id: id,
      CreatedOn:`${Months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
    });
  };

  useEffect(() => {
    console.log(List);
  });

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg h-96 flex flex-col justify-between p-4">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col h-[50%]">
                <div className="sm:flex sm:items-start ">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <h3
                      className="font-bold leading-6 text-gray-900 text-2xl text-left"
                      id="modal-title"
                    >
                      Create new list
                    </h3>
                    <div className="mt-16 space-y-2">
                      <input
                        type="text"
                        className="placeholder:font-bold outline-none w-full border-b-[0.5px] border-black font-semibold"
                        placeholder="Give it a name"
                        maxLength={60}
                        ref={NameRef}
                        value={listName}
                        onChange={(e) => {
                          setlistName(e.target.value);
                          setNewList();
                        }}
                      />
                      <p className="text-right">
                        {NameRef?.current?.value?.length || 0}/60
                      </p>
                      <input
                        type="text"
                        className="placeholder:font-bold outline-none w-full border-b-[1px]  border-black font-semibold"
                        placeholder="Description"
                        maxLength={280}
                        ref={DescRef}
                        value={listDesc}
                        onChange={(e) => {
                          setlistDesc(e.target.value);
                          setNewList();
                        }}
                      />
                      <p className="text-right">
                        {DescRef?.current?.value?.length || 0}/280
                      </p>
                      <div className="space-x-3">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          ref={PrivacyRef}
                          checked={Private}
                          onChange={() => {
                            setPrivate(!Private);
                            setNewList();
                          }}
                        />
                        <label htmlFor="checkbox">Make it Private</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:justify-center sm:px-6">
                <NavLink to="/Library/YourLists">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto border-[1px] border-black"
                  >
                    Cancel
                  </button>
                </NavLink>
                <NavLink to="/Library/YourLists">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      dispatch(AddToLists(List))
                    }
                    }
                  >
                    Create
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewList;
