import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './Drafts/DraftSlice'
import feedReducer from './SamplePosts/FeedSlice'

export default configureStore({
  reducer: {
    Posts:PostsReducer,
    Feed:feedReducer,
  },
})