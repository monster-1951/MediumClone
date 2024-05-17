import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDots, BsEmojiExpressionless } from "react-icons/bs";
import SavePostDropDown from "./SavePostDropDown";
const ForYou = () => {
  const FeedList = useSelector((state) => state.Feed.value);
  console.log(FeedList);

  return (
    <>
      <div>
        {FeedList.map((e,i) => {
          return (
            <div key={e.id} className="p-3 grid order-2 gap-y-3 ">
              <div className="flex justify-between">
                <div className="h-fit p-3 text-left text-xl ">
                  <p className="font-extrabold text-lg">{e.PreviewTitle}</p>
                  <p className="font-serif text-lg">{e.PreviewSubtitle}</p>
                </div>
                <div className="border-black border-1 p-5">
                  <img src={"/MediumClone"+e.PreviewImage} alt="" className="w-fit h-fit" />
                </div>
              </div>
              <div className="flex">
                <p className="ml-3 w-[60%] text-left">{e.Tags[0]}</p>
                <div className="flex space-x-2 w-[50%] h-10">
                  <div><SavePostDropDown postNum={e.id}/></div>
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