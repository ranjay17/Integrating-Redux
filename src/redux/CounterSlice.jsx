
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },

    INCREMENTBY2(state) {
      state.value += 2;
    },
    DECREMENTBY2(state) {
      state.value -= 2;
    },

    INCREMENTBY5(state) {
      state.value += 5;
    },
    DECREMENTBY5(state) {
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
  INCREMENTBY2,
  DECREMENTBY2,
  INCREMENTBY5,
  DECREMENTBY5,
  incrementByAmount,
} = CounterSlice.actions;

export default CounterSlice.reducer;
