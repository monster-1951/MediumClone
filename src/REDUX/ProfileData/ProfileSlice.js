import { createSlice } from "@reduxjs/toolkit";
export const ProfileSlice = createSlice({
  name: "ProfileData",
  initialState: {
    value: {
      DP: localStorage.getItem("ProfilePhoto") || "",
      UserName: JSON.parse(localStorage.getItem("UserName")) || "User-786",
      Bio:
        JSON.parse(localStorage.getItem("Bio")) ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa voluptatibus nihil laudantium illum necessitatibus tenetur distinctio hic nulla labore.",
      Lists: JSON.parse(localStorage.getItem("Lists")) || [
        {
          Lname: "Reading list",
          Ldesc: "",
          Privacy: true,
          Posts: [],
          Id: "ReadingList",
          createdOn: "May 17,2024",
        },
      ],
      Posts: JSON.parse(localStorage.getItem("PublishedPosts")) || null,
      About: JSON.parse(localStorage.getItem("about")) || "",
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
