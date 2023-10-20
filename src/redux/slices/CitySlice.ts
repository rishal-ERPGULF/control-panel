import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CityState {
  id: string;
  name: string;
  name_in_arabic: string;
}
const initialState: CityState = {
  id: "",
  name: "",
  name_in_arabic: "",
};

export const CitySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCityDetails: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.name_in_arabic = action.payload.name_in_arabic;
    },
    clearCity: (state) => {
      state.id = "";
      state.name = "";
      state.name_in_arabic = "";
    },
  },
});

export const { addCityDetails, clearCity } = CitySlice.actions;

export const selectCity = (state: RootState) => state.city;

export default CitySlice.reducer;
