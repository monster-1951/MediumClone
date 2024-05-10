import { configureStore } from '@reduxjs/toolkit'
import DraftsReducer from './Drafts/DraftSlice'

export default configureStore({
  reducer: {
    Drafts:DraftsReducer,
  },
})