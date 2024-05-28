import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value = state.value + 1;
    },

    decreament: (state) => {
      if (state.value > 0) {
        state.value = state.value - 1;
      } else {
        state.error = "Counter cannot be less than zero";
      }
    },
    increamentByvalue: (state, action) => {
      state.value = state.value + action.payload;
    },
    decreamentByValue: (state, action) => {
      if (state.value - action.payload >= 0) {
        state.value = state.value - action.payload;
      } else {
        state.error = "Counter cannot be less than zero";
      }
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {
  increament,
  decreament,
  increamentByvalue,
  decreamentByValue,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;
