import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy2,
  decrementBy2,
  incrementBy5,
  decrementBy5,
} from "../redux/CounterSlice";

export default function CounterComponent() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Counter: {value}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrementBy2())}>-2</button>
        <button onClick={() => dispatch(incrementBy2())}>+2</button>
        <button onClick={() => dispatch(decrementBy5())}>-5</button>
        <button onClick={() => dispatch(incrementBy5())}>+5</button>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => dispatch({ type: "counter/incrementBy2" })}>
          +2 (raw dispatch)
        </button>
      </div>
    </div>
  );
}
