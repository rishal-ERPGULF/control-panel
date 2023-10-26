import { combineReducers } from "@reduxjs/toolkit";
// reducers
import SidebarSlice from "./slices/SidebarSlice";
import AdminSlice from "./slices/AdminSlice";
import CitySlice from "./slices/CitySlice";
import FeaturesSlice from "./slices/FeaturesSlice";
import BrandSlice from "./slices/BrandSlice";

const rootReducer = combineReducers({
  sidebar: SidebarSlice,
  admin: AdminSlice,
  city: CitySlice,
  features: FeaturesSlice,
  brand: BrandSlice,
});

export default rootReducer;
