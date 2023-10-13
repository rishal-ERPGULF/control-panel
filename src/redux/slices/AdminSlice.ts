import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AdminSliceState {
  name: string;
  last_name: string | null;
  id: string;
}

const initialState: AdminSliceState = {
  name: "",
  last_name: "",
  id: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminDetails: (state, action) => {
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      state.id = action.payload.id;
    },
    setAdminSignOut: (state) => {
      state.name = "";
      state.last_name = "";
      state.id = "";
    },
  },
});

export const { setAdminDetails, setAdminSignOut } = adminSlice.actions;

export const selectAdminDetails = (state: RootState) => state.admin;

export default adminSlice.reducer;
