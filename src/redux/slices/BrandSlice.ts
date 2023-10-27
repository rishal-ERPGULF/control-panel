import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface brandState {
  id: string;
  name: string;
  name_in_arabic: string;
  model_id?: string;
}
const initialState: brandState = {
  id: "",
  name: "",
  name_in_arabic: "",
  model_id: "",
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
    setModelId: (state, action) => {
      state.model_id = action.payload;
    },
    clearModelId: (state) => {
      state.model_id = "";
    },
  },
});

export const { addBrandDetails, clearBrand, setModelId, clearModelId } =
  brandSlice.actions;

export const selectBrand = (state: RootState) => state.brand;
export const selectModelId = (state: RootState) => state.brand.model_id;

export default brandSlice.reducer;
