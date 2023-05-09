import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice/themeSlice";

const store = configureStore({
  reducer: {
    counter: themeSlice,
  },
});

export default store;
