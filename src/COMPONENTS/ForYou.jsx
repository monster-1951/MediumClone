import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDots, BsEmojiExpressionless } from "react-icons/bs";
import SavePostDropDown from "./SavePostDropDown";
const ForYou = () => {
  const FeedList = useSelector((state) => state.Feed.value);
  console.log(FeedList);

  return (
    <>
      <div className="w-full">
        {FeedList.map((e,i) => {
          return (
            <div key={e.id} className="p-3 flex flex-col">
              <div className="flex justify-between full">
                <div className="h-fit p-3 text-left text-xl w-11/12">
                  <p className="font-bold sm:font-extrabold text-lg">{e.PreviewTitle}</p>
                  <p className="font-serif text-sm">{e.PreviewSubtitle}</p>
                </div>
                <div className="border-black border-1 p-5 w-6/12">
                  <img src={"/MediumClone"+e.PreviewImage} alt="" className="w-fit h-fit" />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="ml-3 sm:w-[60%] text-left">{e.Tags[0]}</p>
                <div className="flex space-x-3 sm:w-[50%] sm:h-10">
                  <div className=""><SavePostDropDown postNum={e.id} className=""/></div>
                  <div><BsEmojiExpressionless /></div>
                  <div><BsThreeDots /></div>       
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ForYou;
