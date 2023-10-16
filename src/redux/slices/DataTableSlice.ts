import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DataTableIndex {
  index: number;
}

const initialState: DataTableIndex = {
  index: 0,
};

const DataTableSlice = createSlice({
  name: "DataTable",
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.index++;
    },
    setDecrement: (state) => {
      state.index--;
    },
  },
});

export const { setIncrement, setDecrement } = DataTableSlice.actions;

export const selectDataTableIndex = (state: RootState) => state.datatable.index;

export default DataTableSlice.reducer;
