import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import authReducer from './AuthSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
