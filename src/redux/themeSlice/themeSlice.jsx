import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorTheme: "theme-gold",
};

export const themeSlice = createSlice({
  name: "currentTheme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
