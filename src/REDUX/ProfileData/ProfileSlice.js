
import { createSlice } from "@reduxjs/toolkit";
export const ProfileSlice = createSlice({
  name: "ProfileData",
  initialState: {
    value: {
      DP: "",
      UserName:
        localStorage.getItem("UserName") === null
          ? "User-786"
          : JSON.parse(localStorage.getItem("UserName")),
      Bio: localStorage.getItem("Bio")===null?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa voluptatibus nihil laudantium illum necessitatibus tenetur distinctio hic nulla labore.":(JSON.parse(localStorage.getItem("Bio"))),
      Lists:
        localStorage.getItem("Lists") === null
          ? [
              {
                Lname: "Reading list",
                Ldesc: "",
                Privacy: true,
                Posts: [],
                Id: "ReadingList",
                createdOn: "May 17,2024",
              },
            ]
          : JSON.parse(localStorage.getItem("Lists")),
      Posts:
        localStorage.getItem("PublishedPosts") === null
          ? []
          : JSON.parse(localStorage.getItem("PublishedPosts")),
      About:
        localStorage.getItem("about") === null
          ? null
          : JSON.parse(localStorage.getItem("about")),
    },
  },
  reducers: {
    AddAbout: (state, action) => {
      localStorage.setItem("about", JSON.stringify(action.payload));
    },
    AddNameBio: (state, action) => {
      state.value.UserName = action.payload.name;
      state.value.Bio = action.payload.bio;
      console.log(state.value.UserName, state.value.Bio);
      localStorage.setItem("UserName", JSON.stringify(action.payload.name));
      localStorage.setItem("Bio", JSON.stringify(action.payload.bio));
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddAbout, AddNameBio } = ProfileSlice.actions;

export default ProfileSlice.reducer;