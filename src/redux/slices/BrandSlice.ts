import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface brandState {
  id: string;
  name: string;
  name_in_arabic: string;
}
const initialState: brandState = {
  id: "",
  name: "",
  name_in_arabic: "",
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrandDetails: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.name_in_arabic = action.payload.name_in_arabic;
    },
    clearBrand: (state) => {
      state.id = "";
      state.name = "";
      state.name_in_arabic = "";
    },
  },
});

export const { addBrandDetails, clearBrand } = brandSlice.actions;

export const selectBrand = (state: RootState) => state.brand;

export default brandSlice.reducer;
