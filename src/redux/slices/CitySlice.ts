import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CityState {
  name: string;
  name_in_arabic: string;
}
const initialState: CityState = {
  name: "",
  name_in_arabic: "",
};

export const CitySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.name = action.payload.name;
      state.name_in_arabic = action.payload.name_in_arabic;
    },
    clearCity: (state) => {
      state.name = "";
      state.name_in_arabic = "";
    },
  },
});

export const { addCity, clearCity } = CitySlice.actions;

export const selectCity = (state: RootState) => state.city;

export default CitySlice.reducer;
