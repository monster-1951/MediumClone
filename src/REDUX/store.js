import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './Drafts/DraftSlice'

export default configureStore({
  reducer: {
    Posts:PostsReducer,
  },
})