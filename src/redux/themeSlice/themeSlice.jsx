import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTheme: "dark",
}

export const themeSlice = createSlice({
  name: 'currentTheme',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export default themeSlice.reducer