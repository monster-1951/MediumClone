import { createSlice } from '@reduxjs/toolkit'
import { retry } from '@reduxjs/toolkit/query';
import { act } from 'react';
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
    AddPostToList: (state,action) => {
      let post = action.payload.post[0]
      let listofIds = action.payload.list
     console.log(post,listofIds);
     listofIds.forEach(id => {
      (state.value).forEach((list) => {
        if (list.Id==id && (!list.Posts.includes(action.payload.post[0]))) {
          list.Posts.push(post)
        }
      })
     });
    //  console.log(post,listofIds);
  },
    DelPostFromList: (state,action) => {
      let post = action.payload.post[0]
      let IdOfList = action.payload.list
      console.log(post,IdOfList);
      let indOfthatList = (state.value).findIndex((list) => {
        return list.Id == IdOfList
      }
      )
      let thatlist = state.value[indOfthatList].Posts
      state.value[indOfthatList].Posts = thatlist.filter((pst) => {
        return pst.id!= post.id;
      }
      )
      console.log(thatlist[0].id);
    //  listofIds.forEach(id => {
    //   (state.value).forEach((list) => {
    //     if (list.Id==id && !(list.Posts.includes(post))) {
    //       list.Posts.push(post)
    //     }
    //   })
    //  });
    //  console.log(post,listofIds);
  },
  },
})

// Action creators are generated for each case reducer function
export const { AddToLists,DeleteFromLists,AddPostToList,DelPostFromList } = listsSlice.actions

export default listsSlice.reducer