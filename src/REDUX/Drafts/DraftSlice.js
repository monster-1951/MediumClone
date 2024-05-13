import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'Posts',
  initialState: {
    value: localStorage.getItem("PublishedPosts")===null ? []:JSON.parse(localStorage.getItem("PublishedPosts")),
  },
  reducers: {
    InsertToPosts: (state, action) => {
        state.value.push(action.payload)
        state.value.forEach(element => {
          console.log(element);
        });
        localStorage.setItem("PublishedPosts",JSON.stringify(state.value));
    },
    DeleteThisPost: (state, action) => {
        state.value = state.value.filter((element) => {
          return element.id != action.payload
        }
        );
        localStorage.setItem("PublishedPosts",JSON.stringify(state.value));
    },
    FetchThePost: (state,action) =>{
      let Edits
      state.value.map((i) => {
         if(i.id==action.payload){
          Edits = {Heading:i.Title,Data:i.Body}
          console.log(Edits);
           return {Edits};
         }
      }
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { InsertToPosts,DeleteThisPost,FetchThePost } = counterSlice.actions

export default counterSlice.reducer