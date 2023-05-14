import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice/themeSlice";

const store = configureStore({
  reducer: {
    currentTheme: themeSlice,
  },
});

export default store;
