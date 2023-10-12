import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SidebarState {
  isOpen: boolean;
}
const initialState: SidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Actions
export const { toggleSidebar } = sidebarSlice.actions;

// Selectors
export const selectSideBar = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
