import { combineReducers } from "@reduxjs/toolkit";
// reducers
import SidebarSlice from "./slices/SidebarSlice";
import AdminSlice from "./slices/AdminSlice";
import DataTableSlice from "./slices/DataTableSlice";

const rootReducer = combineReducers({
  sidebar: SidebarSlice,
  admin: AdminSlice,
  datatable: DataTableSlice,
});

export default rootReducer;
