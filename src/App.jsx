// import { useState } from "react";
import "./App.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Categories from "./COMPONENTS/Categories";
import Body from "./COMPONENTS/Body";
import WriteArticle from "./COMPONENTS/WriteArticle";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Categories/><Body/></>
    },
    {
      path:"/Write",
      element:<><WriteArticle/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>  
    </>
  );
}

export default App;
