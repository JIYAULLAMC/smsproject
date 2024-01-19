import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSubtabs: {
    Institute: ["Nation", "State", "Curiculam", "Institute"],
    Employee: ["Department", "Area", "Employee"],
    Student: ["Department", "Area", "Student"],
    Attendance: ["Attendance"],
    Device: ["Device"],
    System: ["System"],
  },
  activeSubTab: "Institute",
};

export const subtabsSlice = createSlice({
  name: "subtabs",
  initialState,
  reducers: {
    changeSubtab: (state, action) => {
      state.activeSubTab = action.payload;
      console.log("subtab----------", action.payload);
    },
  },
});

export const { changeSubtab } = subtabsSlice.actions;
export default subtabsSlice.reducer;
