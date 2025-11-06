
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  INCREMENTBY2,
  DECREMENTBY2,
  INCREMENTBY5,
  DECREMENTBY5,
} from "../redux/CounterSlice";

export default function CounterComponent() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {value}</h2>

      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(DECREMENTBY2())}>-2</button>
      <button onClick={() => dispatch(INCREMENTBY2())}>+2</button>

      {/* Buttons for ±5  */}
      <button onClick={() => dispatch(DECREMENTBY5())}>-5</button>
      <button onClick={() => dispatch(INCREMENTBY5())}>+5</button>

      {/* Example of raw dispatch */}
      <button onClick={() => dispatch({ type: "counter/INCREMENTBY2" })}>
        +2 (raw)
      </button>
    </div>
  );
}
