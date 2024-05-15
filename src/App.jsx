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
import Body from "./COMPONENTS/Body"
import Library from "./COMPONENTS/Library";
import YourLists from "./COMPONENTS/YourLists";
import CreateNewList from "./COMPONENTS/CreateNewList";
import DeleteList from "./COMPONENTS/DeleteList";
function App() {
  const [DelThisPost, setDelThisPost] = useState(0)
  const [post,setPost] = useState({});
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"CreateNewList",
      element:<><CreateNewList/></>
    },
    {
      path:"/Recommendation",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/Following",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/Productivity",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/RelationShips",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/Politics",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/Mindfullness",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/SocialMedia",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/LeaderShip",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/Marketing",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/History",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/WebDevelopment",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/LearnMore",
      element:<><Navbar/><Categories/><Body/></>
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
      path:"/Library",
      element:<><Navbar/><Library/></>
    },
    {
      path:"/Library/YourLists",
      element:<><Navbar/><YourLists/></>
    },
    {
      path:"/Library/YourLists/DeleteList",
      element:<><Navbar/><YourLists/><DeleteList/></>
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
