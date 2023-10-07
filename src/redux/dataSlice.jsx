import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [
      {
        id: 1,
        title: "Title1",
        text: "Deneme Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsam corrupti ipsum iste quam minima ex. Cupiditate vero cumque quasi!",
        textColor: "#ffffff",
        noteColor: "#3e7b13",
      },
      {
        id: 2,
        title: "Title2",
        text: "deneme2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsam corrupti ipsum iste quam minima ex. Cupiditate vero cumque quasi!",
        textColor: "#000000",
        noteColor: "#c9e3cc",
      },
      {
        id: 3,
        title: "Title3",
        text: "deneme3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsam corrupti ipsum iste quam minima ex. Cupiditate vero cumque quasi!",
        textColor: "#ffffff",
        noteColor: "#ff4915",
      },
    ],
    search: "",
  },
  reducers: {
    addFunc: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    searchFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const { addFunc, remove, searchFilter } = dataSlice.actions;

export default dataSlice.reducer;
