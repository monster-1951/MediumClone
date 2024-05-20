import { UserCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AddNameBio } from "../REDUX/ProfileData/ProfileSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();
const EditProfile = () => {
  const ProfData = useSelector((state) => state.ProfileData.value);
  const dispatch = useDispatch();
  const [Bio, setBio] = useState(ProfData.Bio || "");
  const [userName, setuserName] = useState(ProfData.UserName || "");
  const userNameRef = useRef();
  const BioRef = useRef();
  useEffect(() => {
    console.log(userNameRef.current.value.length);
  });
  return (
    <div>
      <div className="flex justify-center">
        <ToastContainer />
      </div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Div starts */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <form action="" className="p-3">
                <div
                  id="Heading"
                  className="text-center p-5 font-semibold text-2xl"
                >
                  Profile information
                </div>
                <div id="ProfData" className="space-y-5">
                  <div id="Dp" className="flex w-11/12">
                    <div>
                      <UserCircleIcon className="w-20" />
                    </div>
                    <div>
                      <div className="space-x-3">
                        <NavLink className="text-green-700 font-normal">
                          Update
                        </NavLink>
                        <NavLink className="text-red-500 font-normal">
                          Remove
                        </NavLink>
                      </div>
                      <div className="font-normal text-gray-800">
                        Recommended: Square JPG, PNG, or GIF, at least 1,000
                        pixels per side.
                      </div>
                    </div>
                  </div>
                  <div id="Name" className="p-3 flex flex-col">
                    <label htmlFor="UserName" className="font-semibold">
                      Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none font-semibold p-2"
                      ref={userNameRef}
                      maxLength={50}
                      value={userName}
                      onChange={(e) => {
                        setuserName(e.target.value);
                      }}
                    />
                    <div className="flex justify-between">
                      <div>
                        {userNameRef?.current?.value?.length ? (
                          <p className="font-normal text-gray-800">
                            Appears on your Profile page, as your byline, and in
                            your responses.
                          </p>
                        ) : (
                          <p className="font-normal text-red-800">
                            Please enter your name.
                          </p>
                        )}
                      </div>
                      <span className="font-normal text-gray-800">
                        {userNameRef?.current?.value?.length || 0}/50
                      </span>
                    </div>
                  </div>
                  <div id="Bio" className="p-3 flex flex-col">
                    <p className="font-semibold">Bio</p>
                    <input
                      type="text"
                      className="outline-none font-semibold p-3"
                      maxLength={160}
                      value={Bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                      ref={BioRef}
                      required
                    />
                    <div className="flex justify-between font-normal text-gray-800">
                      <p>Appears on your Profile and next to your stories.</p>
                      <span>{BioRef?.current?.value?.length || 0}/160</span>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-5 font-semibold">
                    <NavLink>
                      <button
                        className="rounded-3xl border-2 border-green-800 px-2 py-1 w-24 text-green-900"
                        onClick={() => {
                          toast.info("Not Saved");
                        }}
                      >
                        Cancel
                      </button>
                    </NavLink>
                    <NavLink>
                      <button
                        className="rounded-3xl bg-green-800 px-2 py-1 w-20 text-white"
                        onClick={() => {
                          if (userNameRef.current.value && BioRef.current.value) {
                            dispatch(
                              AddNameBio({
                                name: userNameRef.current.value || "",
                                bio: BioRef.current.value || "",
                              })
                            );
                            toast.success("Saved successfully")
                          } else {
                            toast.error("User Name or User Bio can't be empty");
                          }
                        }}
                      >
                        Save
                      </button>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;