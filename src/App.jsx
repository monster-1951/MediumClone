import { useState } from "react";
import "./App.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Categories from "./COMPONENTS/Categories";
import Body from "./COMPONENTS/Body";
import WriteArticle from "./COMPONENTS/WriteArticle";
import Stories from "./COMPONENTS/Stories";
import Publish from "./COMPONENTS/Publish";
import {data2} from './CONTEXT/context'

function App() {
  const [post,setPost] = useState({});
  const router = createBrowserRouter([
    {
      path:"/",
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
      path:"/Stories/Drafts",
      element:<><Navbar/><Stories/></>
    },
  ])
  return (
    <data2.Provider value={{post,setPost}}>
      <RouterProvider router={router}></RouterProvider>  
    </data2.Provider>
  );
}

export default App;
