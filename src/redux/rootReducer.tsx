import { combineReducers } from "@reduxjs/toolkit";
// reducers
import SidebarSlice from "./slices/SidebarSlice";

const rootReducer = combineReducers({
  sidebar: SidebarSlice,
});

export default rootReducer;
