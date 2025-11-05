
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // existing simple increment/decrement you may have
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },

    // ===== New actions requested =====
    // Action type will be "counter/INCREMENTBY2"
    INCREMENTBY2(state) {
      state.value += 2;
    },
    // Action type will be "counter/DECREMENTBY2"
    DECREMENTBY2(state) {
      state.value -= 2;
    },

    // optional generic payload-based action you may use elsewhere
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

// Named exports: action creators + reducer default
export const {
  increment,
  decrement,
  INCREMENTBY2,
  DECREMENTBY2,
  incrementByAmount,
} = CounterSlice.actions;

export default CounterSlice.reducer;
