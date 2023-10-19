import { combineReducers } from "@reduxjs/toolkit";
// reducers
import SidebarSlice from "./slices/SidebarSlice";
import AdminSlice from "./slices/AdminSlice";
import CitySlice from "./slices/CitySlice";

const rootReducer = combineReducers({
  sidebar: SidebarSlice,
  admin: AdminSlice,
  city: CitySlice,
});

export default rootReducer;
