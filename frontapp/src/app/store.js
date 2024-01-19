import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import subtabsReducer from "../features/leftsidebar/leftsidebarSlice";
export const store = configureStore({
  reducer: {
    navbars: navbarReducer,
    subtabbar: subtabsReducer,
  },
});
