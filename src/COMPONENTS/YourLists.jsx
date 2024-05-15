import React, { useEffect } from "react";
import Library from "./Library";
import { useSelector } from "react-redux";
import { FaLock, FaUnlock, FaUserCircle } from "react-icons/fa";
import OptnsList from "./OptnsList";
import StaffPicks from "./StaffPicks";
// import Body from "/Users/SHIVA SHANKAR/Desktop/Medium Clone/Images";
const YourLists = () => {
  const Lists = useSelector((state) => state.Lists.value);
  useEffect(() => {
    console.log(Lists);
  });

  return (
    <div className="flex">
      <div className="sm:w-full">
        <Library />
        <div className="space-y-10 mt-2">
          {/* <div className=" shadow-xl bg-green-700 h-28"></div> */}
          {Lists.map((e, i) => {
            return (
              <div
                key={e.Id}
                className="flex justify-between bg-gray-100 rounded-xl h-40"
              >
                <div className="w-3/5 p-3 flex flex-col space-y-[7%]">
                  <div className="flex space-x-2">
                    <FaUserCircle className="h-7" />
                    <p className="font-semibold">user-786</p>
                  </div>
                  <div className="flex font-extrabold text-xl">{e.Lname}</div>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <p>{e.Posts.length + " stories"}</p>
                      <span>
                        {e.Privacy ? (
                          <FaLock className="h-6" />
                        ) : (
                          <FaUnlock className="h-6" />
                        )}
                      </span>
                    </div>               
                      <OptnsList className="w-40" ListNumber={e.Id} />
                  </div>
                </div>
                <div className="bg-slate-800 h-40 w-52 rounded-xl">
                  {/* {e.Posts.map((i, index) => {
                <div key={i.id} className="border-2 border-black h-40">
                  (<img src={i.PreviewImage} alt="" />
                  )?(
                  <img src={i.PreviewImage} alt="" />
                  ):(
                  <img src="/Users/SHIVA SHANKAR/Desktop/Medium Clone/Images/altImage.jpeg" alt="" />)
                </div>;
              })} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <StaffPicks />
    </div>
  );
};

export default YourLists;
