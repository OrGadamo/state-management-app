import "./CounterPage.css";
import {
  upAction,
  downAction,
  resetAction,
  updateCounter,
} from "../../../store/actions/counter-actions";
import { useRef, useContext } from "react";
import { counterContext } from "../../../context/Counter-context";
function CounterPage() {
  const { count, dispatch } = useContext(counterContext);
  const inputCounter = useRef(0);
  return (
    <div className="counter-page">
      <h1>CounterPage</h1>
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

export default CounterPage;
