import React, { useContext,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { postToBeDeleted } from '../CONTEXT/context';
import { DeleteThisPost } from '../REDUX/Drafts/DraftSlice';
const DeletePost = () => {
    const PostNumber = useContext(postToBeDeleted);
    const dispatch = useDispatch()
    useEffect(() => {
      console.log(PostNumber.DelThisPost);
    })
    
  return (
    <>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
      <div className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
           
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="font-bold leading-6 text-gray-900 text-2xl text-center" id="modal-title">Delete story</h3>
              <div className="mt-2">
                <p className="text-sm font-semibold text-gray-500">Deletion is not reversible, and the story will be completely deleted. If you do not want to delete, you can click cancel.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-center sm:px-6">
          <NavLink to="/MediumClone/Stories/Published"><button type="button" className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto border-[1px] border-black">Cancel</button></NavLink>
          <NavLink to="/MediumClone/Stories/Published">
          <button type="button" className="inline-flex w-full justify-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => {
              dispatch(DeleteThisPost(PostNumber.DelThisPost))
            }
            }>Delete</button>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default DeletePost