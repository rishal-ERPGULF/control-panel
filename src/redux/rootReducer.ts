import { combineReducers } from "@reduxjs/toolkit";
// reducers
import SidebarSlice from "./slices/SidebarSlice";
import AdminSlice from "./slices/AdminSlice";

const rootReducer = combineReducers({
  sidebar: SidebarSlice,
  admin: AdminSlice,
});

export default rootReducer;
