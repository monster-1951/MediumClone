import { useState ,useEffect, useContext} from "react";
import "./App.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Categories from "./COMPONENTS/Categories";
import WriteArticle from "./COMPONENTS/WriteArticle";
import Stories from "./COMPONENTS/Stories";
import Publish from "./COMPONENTS/Publish";
import {data2,postToBeDeleted,indexOfList} from './CONTEXT/context'
import PostedStories from "./COMPONENTS/PostedStories";
import StaffPicks from "./COMPONENTS/StaffPicks";
import ForYou from "./COMPONENTS/ForYou";
import DeletePost from "./COMPONENTS/DeletePost";
import Body from "./COMPONENTS/Body"
import Library from "./COMPONENTS/Library";
import YourLists from "./COMPONENTS/YourLists";
import CreateNewList from "./COMPONENTS/CreateNewList";
import DeleteList from "./COMPONENTS/DeleteList";
import CurrentList from "./COMPONENTS/CurrentList";
import { useSelector } from "react-redux";
import Profile from "./COMPONENTS/Profile";
import Lists from "./COMPONENTS/Lists";
import About from "./COMPONENTS/About";
import EditProfile from "./COMPONENTS/EditProfile";
function App() {
  const Listss = useSelector(state=>state.Lists.value)
  const [DelThisPost, setDelThisPost] = useState(0)
  const [post,setPost] = useState({});
  const [index,setIndex] = useState(0);
  const [statuus, setstatuus] = useState("")
  const router = createBrowserRouter([
    {
      path:"/MediumClone/",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/ProfilePage/Home",
      element:<><Navbar/><Profile/></>
    },
    {
      path:"/MediumClone/ProfilePage/Lists",
      element:<><Navbar/><Lists/></>
    },
    {
      path:"/MediumClone/ProfilePage/About",
      element:<><Navbar/><About/></>
    },
    {
      path:"/MediumClone/ProfilePage/EditProfile",
      element:<><EditProfile/></>
    },
    {
      path:"/MediumClone/CreateNewList",
      element:<><CreateNewList/></>
    },
    {
      path:"/MediumClone/Recommendation",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/Following",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/Productivity",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/RelationShips",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/Politics",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/Mindfullness",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/SocialMedia",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/LeaderShip",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/Marketing",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/History",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/WebDevelopment",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/LearnMore",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/MediumClone/Write",
      element:<><WriteArticle/></>
    },
    {
      path:"/MediumClone/Publish",
      element:<><Publish/></>
    },
    {
      path:"/MediumClone/Library",
      element:<><Navbar/><Library/></>
    },
    {
      path:"/MediumClone/Library/YourLists",
      element:<><Navbar/><YourLists/></>
    },
    {

      path:"/MediumClone/Library/YourLists/CurrentList",
      element:<><Navbar/><CurrentList/></>
    },
    {
      path:"/MediumClone/Library/YourLists/DeleteList",

      element:<><Navbar/><YourLists/><DeleteList/></>
    },
    {
      path:"/MediumClone/Stories/Drafts",
      element:<><Navbar/><Stories/></>
    },
    {
      path:"/MediumClone/Stories/Published",
      element:<><Navbar/><PostedStories/></>
    },
    {
      path:"/MediumClone/Stories/Published/DeletePost",
      element:<><Navbar/><PostedStories/><DeletePost/></>
    },
  ])
  return (
    <indexOfList.Provider value={{index,setIndex}}>
    <postToBeDeleted.Provider value={{DelThisPost,setDelThisPost}}>
    <data2.Provider value={{post,setPost}}>
      <RouterProvider router={router}></RouterProvider>  
    </data2.Provider>
    </postToBeDeleted.Provider>
    </indexOfList.Provider>
  );
}

export default App;
