import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FeaturesState {
  id: string;
  name: string;
  name_in_arabic: string;
}
const initialState: FeaturesState = {
  id: "",
  name: "",
  name_in_arabic: "",
};

export const FeaturesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addFeatureDetails: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.name_in_arabic = action.payload.name_in_arabic;
    },
    clearFeature: (state) => {
      state.id = "";
      state.name = "";
      state.name_in_arabic = "";
    },
  },
});

export const { addFeatureDetails, clearFeature } = FeaturesSlice.actions;

export const selectFeatures = (state: RootState) => state.features;

export default FeaturesSlice.reducer;
