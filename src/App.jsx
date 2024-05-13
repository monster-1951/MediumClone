import { useState ,useEffect} from "react";
import "./App.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Categories from "./COMPONENTS/Categories";
import WriteArticle from "./COMPONENTS/WriteArticle";
import Stories from "./COMPONENTS/Stories";
import Publish from "./COMPONENTS/Publish";
import {data2,postToBeDeleted} from './CONTEXT/context'
import PostedStories from "./COMPONENTS/PostedStories";
import StaffPicks from "./COMPONENTS/StaffPicks";
import ForYou from "./COMPONENTS/ForYou";
import DeletePost from "./COMPONENTS/DeletePost";

function App() {
  const [DelThisPost, setDelThisPost] = useState(0)
  const [post,setPost] = useState({});
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Categories/><ForYou/><StaffPicks/></>
    },
    {
      path:"/LearnMore",
      element:<><Navbar/><Categories/><ForYou/><StaffPicks/></>
    },
    {
      path:"/Write",
      element:<><WriteArticle/></>
    },
    {
      path:"/Publish",
      element:<><Publish/></>
    },
    {
      path:"/Stories/Drafts",
      element:<><Navbar/><Stories/></>
    },
    {
      path:"/Stories/Published",
      element:<><Navbar/><PostedStories/></>
    },
    {
      path:"/Stories/Published/DeletePost",
      element:<><Navbar/><PostedStories/><DeletePost/></>
    },
  ])
  return (
    <postToBeDeleted.Provider value={{DelThisPost,setDelThisPost}}>
    <data2.Provider value={{post,setPost}}>
      <RouterProvider router={router}></RouterProvider>  
    </data2.Provider>
    </postToBeDeleted.Provider>
  );
}

export default App;
