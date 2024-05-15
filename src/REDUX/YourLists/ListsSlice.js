import { createSlice } from '@reduxjs/toolkit'
export const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    value: localStorage.getItem("Lists")===null ? []:JSON.parse(localStorage.getItem("Lists")),
  },
  reducers: {
    AddToLists: (state, action) => {
      state.value.push(action.payload)
      state.value.forEach(element => {
        console.log(element);
      });
      localStorage.setItem("Lists",JSON.stringify(state.value));
      console.log(state.value);
  },
    DeleteFromLists: (state, action) => {
      state.value = state.value.filter((element) => {
        return element.Id != action.payload
      }
      );
      state.value.forEach(element => {
        console.log(element);
      });
      localStorage.setItem("Lists",JSON.stringify(state.value));
      console.log(state.value);
      console.log(action.payload);
  },
  },
})

// Action creators are generated for each case reducer function
export const { AddToLists,DeleteFromLists } = listsSlice.actions

export default listsSlice.reducer