import { useReducer, useRef } from "react";
import "./App.css";
import { counterReducer, initialState } from "./store/reducers/counter-reducer";
import {
  upAction,
  downAction,
  resetAction,
  updateCounter,
} from "./store/actions/counter-actions";

function App() {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  const inputCounter = useRef(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <input ref={inputCounter} type="number" />
      <button onClick={() => dispatch(upAction())}>up</button>
      <button onClick={() => dispatch(downAction())}>down</button>
      <button onClick={() => dispatch(resetAction())}>reset</button>
      <button
        onClick={() => dispatch(updateCounter(+inputCounter.current.value))}
      >
        update to input
      </button>
    </div>
  );
}

export default App;
