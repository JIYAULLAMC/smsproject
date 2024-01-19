import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTabs: [
    "Institute",
    "Student",
    "Employee",
    "Attendance",
    "Device",
    "System",
  ],
  activeTab: "Institute",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.activeTab = action.payload;
      console.log("+++++-------------", action.payload)
    },
  },
});

export const { changeTab } = navbarSlice.actions;
export default navbarSlice.reducer;
