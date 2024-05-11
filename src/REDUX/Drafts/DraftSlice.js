import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Posts',
  initialState: {
    value: [],
  },
  reducers: {
    InsertToPosts: (state, action) => {
        state.value.push(action.payload)
        console.log(state.value);
    },
  },
})

// Action creators are generated for each case reducer function
export const { InsertToPosts } = counterSlice.actions

export default counterSlice.reducer