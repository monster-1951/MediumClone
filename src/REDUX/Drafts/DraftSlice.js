import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Drafts',
  initialState: {
    value: [],
  },
  reducers: {
    insertIntoDraftList: (state, action) => {
        if (state.value.length==1) {
            state.value = [action.payload]          
        } else {
            state.value = [...state.value,action.payload]          
        }
        console.log((state.value));
      
    },
    PushIntoDraftList: (state, action) => {
        if (state.value.length==1) {
            state.value = [action.payload]          
        } else {
            state.value = [...state.value,action.payload]          
        }
        state.value.length++;
        console.log((state.value));
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { insertIntoDraftList,PushIntoDraftList } = counterSlice.actions

export default counterSlice.reducer