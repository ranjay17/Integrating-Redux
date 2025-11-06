import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementBy2(state) {
      state.value += 2;
    },
    decrementBy2(state) {
      state.value -= 2;
    },
    incrementBy5(state) {
      state.value += 5;
    },
    decrementBy5(state) {
      state.value -= 5;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementBy2,
  decrementBy2,
  incrementBy5,
  decrementBy5,
  incrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
