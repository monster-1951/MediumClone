import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './Drafts/DraftSlice'
import feedReducer from './SamplePosts/FeedSlice'
import listsReducer from './YourLists/ListsSlice'
import ProfileDataReducer from './ProfileData/ProfileSlice'
export default configureStore({
  reducer: {
    Posts:PostsReducer,
    Feed:feedReducer,
    Lists:listsReducer,
    ProfileData: ProfileDataReducer
  },
})